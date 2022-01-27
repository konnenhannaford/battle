const { User } = require('../models');

const resolvers = {
  Query: {

  me: async (parent, args, context) => {
    // what i see elsewhere is like this - parent, args, context, info

    if (context.user) {
      const userData = await User.findOne({ _id: context.user._id });
      return userData;
    }
  },
// whats this doing?
      // return User.findOne({ _id: context.user._id });
//     }
//     throw new AuthenticationError('You need to be logged in!');
// },

// this part?
//   users: async () => {
//     return await User.find().select('-__v -password').populate('savedBooks');
// },

// user: async (parent, { username }) => {
//     return await User.findOne({ username }).select('-__v -password').populate('savedBooks');
// }
// },


// login(username: String!, password: String!): Auth
// addUser(username: String!, password: String!, email:String!): Auth
// saveBook(authors: String, description: String, title: String!, bookId: String, image: String, link: String): User
// removeBook(bookId: String!): User


  Mutation: {
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});
        if (!user) {
    throw new AuthenticationError('This info is wrong');
  }

  const correctPw = await user.isCorrectPassword(password);

  if (!correctPw) {
    throw new AuthenticationError('This info is wrong');
  }

  const token = signToken(user);
  return { token, user };
 
    },
    
    addUser: async (parent, args) => {
      // instead of args? - {username, email, password}
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookData }, context) => {
      //         saveBook: async (parent, args, context) => {
      if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            // return User.findOneAndUpdate(

              { _id: context.user._id },
              { $push: { savedBooks: bookData } },
              //               {$push: { savedBooks: args}},
              { new: true, runValidators: true }
                // { new: true})
              //   .then (result => {
              //     return{...result}
              // })
              // .catch (err => {
              //     console.error(err)
              // })

          );

          return updatedUser;
      }

      throw new AuthenticationError('There was a request error...');
  },
    
  
        removeBook: async (parent, {bookId}, context) => {
          if (context.user) {
          return User.findOneAndUpdate(
              { _id: context.user._id},
              {$pull: { savedBooks: {bookId}}},
              //             { $pull: { savedBooks: { bookId: bookId } } },
              { new: true})
              .then (result => {
                  return{...result}
              })
              .catch (err => {
                  console.error(err)
              })
      }
      throw new AuthenticationError('Please login to delete a book!');

  } 
}
}
};

module.exports = resolvers;

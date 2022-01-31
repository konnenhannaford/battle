const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

// const resolvers = {

    
//         Query: {
//           books: () => "hello world",
//         },

// const resolvers = {
//   Query: {
//     User: () => User,
//   },


  const resolvers = {
    // Query: {
    //   books: () => books,
    // },


// };
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                // .select('-__v -password')
                // .populate('savedBooks');
                return userData;
            }
        },

        users: async () => {
            return await User.find().select('-__v -password').populate('savedBooks');
        },

        user: async (parent, { username }) => {
            return await User.findOne({ username }).select('-__v -password').populate('savedBooks');
        }
    
      //   allArtists: () => artists,
      //   allSongs: () => songs

      // }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect login information!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect login information!');
            }

            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addArtist: async (parent, { artistprofileId }, context) => {    
          const artist = await Artist.findById(artistprofileId);
              await artist.save();
              return artist;
    
        },
        
          
          
      
    }
};

module.exports = resolvers;
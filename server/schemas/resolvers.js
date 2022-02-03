const { Artist, Winners, Songs} = require('../models');
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
     
    users:async(parent,args)=>{
        const allArtists = await Artists.find();
        const allSongs = await Songs.find();
        return {artists:allArtists, songs:allSongs}
    },
    user:async(parent, {email})=>{
          const artist = await Artists.findOne({email:email});
          const allSongs = await Songs.findOne({email:email});
          console.log(artist)
          console.log(allSongs);
          
         if(allSongs && artist){
           return {artist:artist, songs:allSongs}
       }else if(artist){
           return {artist:artist}
   }

},

Votes:async(parent,{id})=>{
    const song = await Songs.findByIdAndUpdate(id,{$inc: {"votes": 1 }})
    console.log(song);
    if(song){
        const {_id,submission, submissionInfo, votes} = song;
        return {id:String(_id),submission, submissionInfo, votes};
    }else{
        throw new ApolloError("Error Occured");
    }
    
}
    
      //   allArtists: () => artists,
      //   allSongs: () => songs

      // }
      // Query: {
      //   allPeople: () => people,
      //   allPets: () => pets,
      //   petById: (parent, args) => {
      //       return pets.filter(pet => pet.id === args.id)
      //   } 
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await Artists.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect login information!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect login information!');
            }

            const token = signToken(user);
            console.log(user);
            const {_id,artist_name, artist_info,spotify,apple, youtube, soundcloud } = user;

            return {id:String(_id), artist_name, artist_info,spotify,apple, youtube, soundcloud };
            // return { token, user };
        },

        // addUser: async (parent, args) => {
        //     const user = await User.create(args);
        //     const token = signToken(user);
        //     console.log(user);
        //     return {token, user };
        // },
        addSong:async(parent,args)=>{
            console.log("Data=>",{...args})
            const songs = new Songs({...args})
            console.log("Songs",songs)
              songs.save()
              if(songs){
                  const {_id,submission, submissionInfo, votes} = songs;
                  return {id:String(_id),submission, submissionInfo, votes};

              }else{
                  throw new ApolloError("Error Occured");
              }
        },
        addArtist:async(parent,args)=>{
            console.log(args)
            // let spotify = args.spotify ? args.spotify : null
            // let apple = args.apple ? args.apple : null
            // let soundcloud = args.soundcloud ? args.soundcloud : null
            // let youtube = args.youtube ? args.youtube : null
            const artist = new Artist(args)
             console.log("Songs",artist)
              artist.save()
              if(artist){
                const {_id,artist_name, artist_info,spotify,apple, youtube, soundcloud } = artist;
                return {id:String(_id),artist_name, artist_info,spotify,apple, youtube, soundcloud};
              }else{
                  throw new ApolloError("Error Occured");
              }
        },     
        addToWinners:async(parent, args)=>{
            console.log(args)
        } 
      
    }
};

module.exports = resolvers;



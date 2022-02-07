const { Artists, Winners, Songs } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

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
    songs:async(_,{artistId})=>{
     const allSongs = await Songs.find({artistId})
     return allSongs
    },
    users: async (parent, args) => {
      const allArtists = await Artists.find();
      const allSongs = await Songs.find();

      // return {artist_name, artist_info,spotify,apple, youtube, soundcloud};

      return { artists: allArtists, songs: allSongs };
    },
    user: async (parent, { id }) => {
    console.log(id)
      const artist = await Artists.findOne({ _id: id });

      if (artist) {
        return { artist };
      } 
    },
    Votes: async (parent, { id }) => {
      const song = await Songs.findByIdAndUpdate(id);
      console.log(song);
      if (song) {
        const { _id, submission, submissionInfo, votes } = song;
        return { id: String(_id), submission, submissionInfo, votes };
      } else {
        throw new ApolloError("Error Occured");
      }
    },
    deleteSong:async (_,{id})=>{
      console.log(id)
      const song = await Songs.findByIdAndDelete(id);
     console.log(song)
     if(song){
      console.log(song)
      const { _id, submission, submissionInfo, artistId } = song;
        return { id: String(_id), submission, submissionInfo, artistId };
      
    }
  }
    //   allArtists: () => artists,
    //   allSongs: () => songs

    // }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await Artists.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect login information!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect login information!");
      }

      const token = signToken(user);
      console.log(user);
      const {
        _id,
        artist_name,
        artist_info,
        spotify,
        apple,
        youtube,
        soundcloud,
      } = user;

      return {
        id: String(_id),
        artist_name,
        artist_info,
        spotify,
        apple,
        youtube,
        soundcloud,
      };
    },

    addSong: async (parent, args) => {
      console.log("Data=>", { ...args });
      const songs = new Songs({ ...args });
      console.log("Songs", songs);
      songs.save();
      if (songs) {
        const { _id, submission, submissionInfo, votes,artistId } = songs;
        return { id: String(_id), submission, submissionInfo, votes, artistId };
      } else {
        throw new ApolloError("Error Occured");
      }
    },
    addArtist: async (parent, args) => {
      console.log(args);
      let spotify = args.spotify ? args.spotify : null;
      let apple = args.apple ? args.apple : null;
      let soundcloud = args.soundcloud ? args.soundcloud : null;
      let youtube = args.youtube ? args.youtube : null;

      const artist = await new Artists({
        spotify,
        apple,
        soundcloud,
        youtube,
        artist_name: args.artist_name,
        artist_info: args.artist_info,
        email: args.email,
        password: args.password,
      });
      artist.save();

      if (artist) {
        console.log("Songs", artist);

        const {
          _id,
          artist_name,
          artist_info,
          spotify,
          apple,
          youtube,
          soundcloud,
        } = artist;
        
        return {
          id: String(_id),
          artist_name,
          artist_info,
          spotify,
          apple,
          youtube,
          soundcloud,
        };
      } else {
        throw new ApolloError("Error Occured");
      }
    },
    addToWinners: async (parent, args) => {
      console.log(args);
    },
    updateProfile:async(_,args)=>{
     console.log(args)
     const {id,...data} = args;
    console.log(data)
     const updatedData =await Artists.findByIdAndUpdate(id,{$set:data},{new:true})
     console.log(updatedData); 
     return args;
    }
  },
};

module.exports = resolvers;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------






// const { Artists, Winners, Songs} = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');


//   const resolvers = {

// Query: {
//     songs:async(_,{artistId})=>{
//         const allSongs = await Songs.find({artistId})
//         return allSongs
//        },
//     users:async(parent,args)=>{
//         const allArtists = await Artists.find();
//         const allSongs = await Songs.find();
//         return {artists:allArtists, songs:allSongs}
//     },
//     user:async(parent, {email})=>{
//           const artist = await Artists.findOne({email:email});
//           const allSongs = await Songs.find({email:email});
//           console.log(artist)
//           console.log(allSongs);
          
//          if(allSongs && artist){
//            return {artist, songs:allSongs}
//        }else if(artist && !allSongs){
//            return {artist:artist, songs:[]}
//    }

// },
// // user: async (parent, { id }) => {
// //     console.log(id)
// //       const artist = await Artists.findOne({ _id: id });

// //       if (artist) {
// //         return { artist };
// //       } 
// //     },
// Votes:async(parent,{id})=>{
//     const song = await Songs.findByIdAndUpdate(id)
//     console.log(song);
//     if(song){
//         const {_id,submission, submissionInfo, votes} = song;
//         return {id:String(_id),submission, submissionInfo, votes};
//     }else{
//         throw new ApolloError("Error Occured");
//     }
// },
//     deleteSong:async (_,{id})=>{
//         console.log(id)
//         const song = await Songs.findByIdAndDelete(id);
//        console.log(song)
//        if(song){
//         console.log(song)
//         const { _id, submission, submissionInfo, artistId } = song;
//           return { id: String(_id), submission, submissionInfo, artistId };
        
//       }
// }
    
//       //   allArtists: () => artists,
//       //   allSongs: () => songs

//       // }
//       // Query: {
//       //   allPeople: () => people,
//       //   allPets: () => pets,
//       //   petById: (parent, args) => {
//       //       return pets.filter(pet => pet.id === args.id)
//       //   } 
//     },

//     Mutation: {
//         login: async (parent, { email, password }) => {
//             const user = await Artists.findOne({ email });

//             if (!user) {
//                 throw new AuthenticationError('Incorrect login information!');
//             }

//             const correctPw = await user.isCorrectPassword(password);

//             if (!correctPw) {
//                 throw new AuthenticationError('Incorrect login information!');
//             }

//             const token = signToken(user);
//             console.log(user);
//             const {_id,artist_name, artist_info,spotify,apple, youtube, soundcloud } = user;

//             return {id:String(_id), artist_name, artist_info,spotify,apple, youtube, soundcloud };
//             // return { token, user };
//         },

//         // addUser: async (parent, args) => {
//         //     const user = await User.create(args);
//         //     const token = signToken(user);
//         //     console.log(user);
//         //     return {token, user };
//         // },
//         addSong:async(parent,args)=>{
//             console.log("Data=>",{...args})
//             const songs = new Songs({...args})
//             console.log("Songs",songs)
//               songs.save()
//               if(songs){
//                   const {_id,submission, submissionInfo, votes} = songs;
//                   return {id:String(_id),submission, submissionInfo, votes};

//               }else{
//                   throw new ApolloError("Error Occured");
//               }
//         },
//         addArtist:async(parent,args)=>{
//             console.log(args)
//             let spotify = args.spotify ? args.spotify : null
//             let apple = args.apple ? args.apple : null
//             let soundcloud = args.soundcloud ? args.soundcloud : null
//             let youtube = args.youtube ? args.youtube : null
//             // const artist = new Artists(args)
            
//             //  or
//              const artist = new Artists({spotify, apple, soundcloud, youtube,artist_name:args.artist_name,
//                 artist_info:args.artist_info,email:args.email, password:args.password});
//             // console.log("Songs",artist)
//               artist.save();
//               if(artist){
//                 console.log("Songs",artist)
//                 const {_id,artist_name, artist_info,spotify,apple, youtube, soundcloud } = artist;
//                 return {id:String(_id),artist_name, artist_info,spotify,apple, youtube, soundcloud};
//               }else{
//                   throw new ApolloError("Error Occured");
//               }
//         },     
//         addToWinners:async(parent, args)=>{
//             console.log(args)
//         },
//         updateProfile:async(_,args)=>{
//          console.log(args)
//          const {id,...data} = args;
//         console.log(data)
//          const updatedData =await Artists.findByIdAndUpdate(id,{$set:data},{new:true})
//          console.log(updatedData); 
//          return args;
//         }
//       },
//     };
    
// module.exports = resolvers;



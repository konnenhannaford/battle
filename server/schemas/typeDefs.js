const { gql } = require('apollo-server-express');
// const { listenerCount } = require('../../server copy/models/submissions');


const typeDefs = gql`

type ArtistProfile{
  id:ID
  email: String
  password: String
artist_name: String!
artist_info: String!
spotify: String
apple: String
youtube: String
soundcloud: String
} 
type Artist{
songs:[Songs]
artist:ArtistProfile!
}
type allUsers{
  songs:[Songs]
  artists:[ArtistProfile]!
  winners:[Winners]!
}  
type Query {
users:allUsers!
user(email:String!):Artist
Votes(id:ID!):Songs
}

type Songs{
id:ID
submission:String!,
submissionInfo:String!,
votes:Int!        
}


type Winners{
song:Songs
artist:ArtistProfile
} 
input SongInput{
submission:String!,
submissionInfo:String!,
votes:Int!        
}

input ArtistProfileInput{
  email: String
artist_name: String!
artist_info: String!
spotify: String
apple: String
youtube: String
soundcloud: String
}

input WinnerInput{
song:SongInput!
artist:ArtistProfileInput!
}
type Mutation {

  login(email: String!, password: String!): ArtistProfile
  addSong(email:String!,submission: String!, submissionInfo: String!, votes: Int!): Songs
  addArtist(email:String!,password:String!,artist_name: String!, artist_info: String!, spotify: String, apple: String, Youtube: String, soundcloud: String):ArtistProfile
  addToWinners(winner:WinnerInput! ): Winners

}
       






`

;

module.exports = typeDefs;


                  // do i still need?
                  // type Auth {
                  //   token: ID!
                  //   user: User
                  // }
                  //

                          // type Auth {
                          //   token: ID!
                          //   artist: Artist
                          // }

                  // need to add
                  // deleteSong(email:String!,submission: String!, submissionInfo: String!): Songs
                  // and do one for updateuser

// context s global thing to store info so dont add
// parent has to go in all
// change everything artist to user

// adding song to page
// // addSong(submission: String!, submissionInfo: String!, votes: Int!): Songs
// addign song to winners 
// // addToWinners (artist name: String!, artist info: String!, spotify: String, apple: String, Youtube: String, soundcloud: String, submission: String!, submissionInfo: String!, votes: Int!): Winners
// login 
// // login(email: String!, password: String!): Auth
// signup page 
// // addUser(username: String!, email: String!, password: String!): Auth 
// signup as musician
// addArtist(artist name: String!, artist info: String!, spotify: String, apple: String, Youtube: String, soundcloud: String): User

          // type Query {
          //   allartistprofiles: [artistprofile!]
          //   allSongs: [Songs!]
          // }
  // vote on posts



  // type Songs{
  //   id:ID
  //   submission:String!,
  //   submissionInfo:String!,
  //   votes:Int!        
  // }
        
  // input SongInput{
  //   submission:String!,
  //   submissionInfo:String!,
  //   votes:Int!        
  // }
  // type ArtistProfile{
  //     id:ID
  //     email: String
  //     password: String
  //   artist_name: String!
  //   artist_info: String!
  //   spotify: String
  //   apple: String
  //   youtube: String
  //   soundcloud: String
  //   songs:[Songs]
  
  // } 
  
  // type Artist{
  // songs: [Songs]
  // artist: [ArtistProfile]!
  
  // }
  
  // input ArtistProfileInput{
  //   email: String
  //   artist_name: String!
  //   artist_info: String!
  //   spotify: String
  //   apple: String
  //   youtube: String
  //   soundcloud: String
  // }
          
  // type allUsers{
  //   songs:[Songs]
  //   artists:[ArtistProfile]!
  //   winners:[Winners]!
  // }  
  
  // type Query {
  //   users:allUsers
  //   user(email:String!):Artist
  //   Votes(id:ID!):Songs
  // }
         
  //   type Auth {
  //     token: ID!
  //     artist: Artist
  // }
  
  // type Winners{
  //   song:Songs
  //   artist:ArtistProfile
  // } 
  //         input WinnerInput{
  //           song:SongInput!
  //           artist:ArtistProfileInput!
  //         }
  
  //   type Mutation {
    
  //   login(email: String!, password: String!): Auth
  //   addSong(email:String!,submission: String!, submissionInfo: String!, votes: Int!): Songs
  //   deleteSong(email:String!,submission: String!, submissionInfo: String!): Songs
  //   addArtist(email:String!,password:String!,artist_name: String!, artist_info: String!, spotify: String, apple: String, youtube: String, soundcloud: String):Artist
  //   addToWinners(winner:WinnerInput! ): Winners
  
  //   }
  
  // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//   type Songs{
//     id:ID
//     submission:String!,
//     submissionInfo:String!,
//     votes:Int!        
//   }

//   input SongInput{
//       submission:String!,
//       submissionInfo:String!,
//       votes:Int!        
//     }
// type ArtistProfile{
//     id:ID
//     email: String
//     password: String
//   artist_name: String!
//   artist_info: String!
//   spotify: String
//   apple: String
//   youtube: String
//   soundcloud: String
//   songs:[Songs]

// } 

// type Artist{
// songs: [Songs]
// artist:ArtistProfile!

// }

// input ArtistProfileInput{
// email: String
// artist_name: String!
// artist_info: String!
// spotify: String
// apple: String
// youtube: String
// soundcloud: String
// }
      
//             type allUsers{
//               songs:[Songs]
//               artists:[ArtistProfile]!
//               winners:[Winners]!
//             }  

//           type Query {
//             users:allUsers
//             user(email:String!):Artist
//             Votes(id:ID!):Songs
//           }



//                 type Winners{
//                   song:Songs
//                   artist:ArtistProfile
//                 } 
//             input WinnerInput{
//           song:SongInput!
//           artist:ArtistProfileInput!
//         }

// type Mutation {

// login(email: String!, password: String!): ArtistProfile
// addSong(email:String!,submission: String!, submissionInfo: String!, votes: Int!): Songs
// addArtist(email:String!,password:String!,artist_name: String!, artist_info: String!, spotify: String, apple: String, youtube: String, soundcloud: String):ArtistProfile
// addToWinners(winner:WinnerInput! ): Winners

// }
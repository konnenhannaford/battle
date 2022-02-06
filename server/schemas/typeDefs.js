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
  artist:ArtistProfile!
}
type allUsers{
    songs:[Songs]
    artists:[ArtistProfile]!
    winners:[Winners]!
}  
type Query {
  users:allUsers!
  user(id:ID!):Artist
  Votes(id:ID!):Songs
  songs(artistId:String!):[Songs]
  deleteSong(id:ID!):Songs
}

type Songs{
id:ID
 submission:String!,
 submissionInfo:String!,
 votes:Int,
 artistId:String        
}


type Winners{
song:Songs
artist:ArtistProfile
} 
input SongInput{
 submission:String!,
 submissionInfo:String!,
 votes:Int        
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
    addSong(artistId:String!,submission: String!, submissionInfo: String!, votes: Int): Songs
    addArtist(email:String!,password:String!,artist_name: String!, artist_info: String!, spotify: String, apple: String, Youtube: String, soundcloud: String):ArtistProfile
    addToWinners(winner:WinnerInput! ): Winners
    updateProfile(id:ID!,email:String,password:String,artist_name: String, artist_info: String, spotify: String, apple: String, youtube: String, soundcloud: String):ArtistProfile
  }
`

;

module.exports = typeDefs;



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


  
  
// type Songs{
//   id:ID
//   submission:String!,
//   submissionInfo:String!,
//   votes:Int!        
// }

// input SongInput{
//     submission:String!,
//     submissionInfo:String!,
//     votes:Int!        
//   }
// type ArtistProfile{
//   id:ID
//   email: String
//   password: String
// artist_name: String!
// artist_info: String!
// spotify: String
// apple: String
// youtube: String
// soundcloud: String
// songs:[Songs]

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
    
//           type allUsers{
//             songs:[Songs]
//             artists:[ArtistProfile]!
//             winners:[Winners]!
//           }  

//         type Query {
//           users:allUsers
//           user(email:String!):Artist
//           Votes(id:ID!):Songs
//         }



//               type Winners{
//                 song:Songs
//                 artist:ArtistProfile
//               } 
//           input WinnerInput{
//         song:SongInput!
//         artist:ArtistProfileInput!
//       }

// type Mutation {

// login(email: String!, password: String!): ArtistProfile
// addSong(email:String!,submission: String!, submissionInfo: String!, votes: Int!): Songs
// addArtist(email:String!,password:String!,artist_name: String!, artist_info: String!, spotify: String, apple: String, youtube: String, soundcloud: String):ArtistProfile
// addToWinners(winner:WinnerInput! ): Winners

// }

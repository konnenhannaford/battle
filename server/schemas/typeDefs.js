const { gql } = require('apollo-server-express');
// const { listenerCount } = require('../../server copy/models/submissions');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        role: String!
    }   
    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    type Auth {
      token: ID!
      user: User
  }

    type Mutation {
      
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth 
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

// // addArtist(artist name: String!, artist info: String!, spotify: String, apple: String, Youtube: String, soundcloud: String): User
// type artistprofile {
//   user: User!
//   artist name: String!
//   artist info: String!
//   spotify: String
//   apple: String
//   youtube: String
//   soundcloud: String
//   } 


  // vote on posts


                        //       type User {
                        //         _id: ID
                        //         username: String!
                        //         email: String!
                        //         password: String!
                        //         role: String!
                        //     }   
                        
                          
                        //     type artistprofile {
                        //       user: User!
                        //       artist name: String!
                        //       artist info: String!
                        //       spotify: String
                        //       apple: String
                        //       youtube: String
                        //       soundcloud: String
                        //       } 
                        
                        //     type Auth {
                        //         token: ID!
                        //         user: User
                        //     }
                        
                        //     type Songs {
                        //       user: ID!
                        //       submission: String!
                        //       submissionInfo: String!
                        //       votes: Int!
                        //     }
                        
                        //     type Winners {
                        //       user: ID!
                        //       song: ID!
                        //     }
                        
                        //     type Query {
                        //         me: User
                        //         users: [User]
                        //         user(username: String!): User
                        //     }
                        
                        
                        //     type Mutation {
                              
                        //         login(email: String!, password: String!): Auth
                        //         addUser(username: String!, email: String!, password: String!): Auth 
                        
                        //     }
                                    
                          
                        // `
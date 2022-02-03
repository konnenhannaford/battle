                require('dotenv').config()
                const express = require('express');
                const path = require('path');
                const dbConnection = require('./config/connection');
                const { authMiddleware } = require('./utils/auth');
// const routes = require('./routes');
                const { ApolloServer } = require('apollo-server-express');
                const { typeDefs, resolvers } = require('./schemas');
// const Router = require('./routes/app');

                const app = express();
                const PORT = process.env.PORT || 3001;
                const URI = process.env.MONGODB_URI;


                const server = new ApolloServer({
                        typeDefs,
                        resolvers,
                        playground: true,
                        introspection: true,
                        // context: authMiddleware
                });

// (async function(){
//         var body = await httpGet('link');
//         $.response.setBody(body);
//     })()
    
    // from docs
// await server.start: async () => {
        //     return await User.find().select('-__v -password').populate('savedBooks');
        // },

                app.use(express.urlencoded({ extended: true }));
                app.use(express.json());
//         const serverConfig = async () => {
//                 await server.start();
//                 server.applyMiddleware({ app });
//              // app.get("/",(req,res)=>{res.send("Hello there")})
// // if we're in production, serve client/build as static assets

                  //                 if (process.env.NODE_ENV === 'production') {
                  //                 app.use(express.static(path.join(__dirname, '../client/build')));
                  // }

// // app.use("/app",Router)
// //       // this
                                    // app.get('*', (req, res) => {
                                    // res.sendFile(path.join(__dirname, '../client/build/index.html'));
                                    // });

// // app.get('/guneet/home', (req, res) => {
// //         res.sendFile();
// // });

// dbConnection(URI)

// app.listen(PORT, () => {
//   console.log(`🌍 Now listening on localhost:${PORT}`);
//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// }); };
//               serverConfig();




              const serverConfig = async () => {
                await server.start();
                server.applyMiddleware({ app });
              };
              serverConfig();
        
              dbConnection()

              app.listen({ port: PORT }, () => {
                console.log(`🌍 Now listening on localhost:${PORT}`);
                console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
              });
              




// const express = require('express');
// const path = require('path');
// const { ApolloServer } = require('apollo-server-express');
// const db = require('./config/connection');
// const { typeDefs, resolvers } = require('./schemas');

// const app = express();
// const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     // log where we can go to test our GQL API
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });

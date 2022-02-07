// METH 1
                const express = require('express');
                const path = require('path');
                const dbConnection = require('./config/connection');

                const { authMiddleware } = require('./utils/auth');
                // const routes = require('./routes');
                const { ApolloServer } = require('apollo-server-express');
                const { typeDefs, resolvers } = require('./schemas');
                // const Router = require('./routes/app');
                require('dotenv').config();

                const app = express();
                const PORT = process.env.PORT || 3001;
                const URI = process.env.MONGODB_URI;

                const server = new ApolloServer({
                        typeDefs,
                        resolvers,
                        playground: true,
                        introspection: true,
                });
                const serverConfig = async () => {
                        await server.start();
                        server.applyMiddleware({ app });
                };
                serverConfig();
                // (async function(){
                //         var body = await httpGet('link');
                //         $.response.setBody(body);
                //     })()
                
                // from docs
                // await server.start: async () => {
                        //     return await User.find().select('-__v -password').populate('savedBooks');
                        // },
                /*
                app.use(express.json());
                        const serverConfig = async () => {
                                await server.start();
                                server.applyMiddleware({ app });
                        };
                        serverConfig();
                // app.get("/",(req,res)=>{res.send("Hello there")})
                // if we're in production, serve client/build as static assets

                if (process.env.NODE_ENV === 'production') {
                app.use(express.static(path.join(__dirname, '../client/build')));
                }

                // app.use("/app",Router)
                //       // this
                app.get('*', (req, res) => {
                res.sendFile(path.join(__dirname, '../client/build/index.html'));
                });

                // app.get('/guneet/home', (req, res) => {
                //         res.sendFile();
                // });
                */
                dbConnection()

                app.listen({ port: 4000 }, () => {
                console.log(`🌍 Now listening on localhost:${4000}`);
                console.log(`Use GraphQL at http://localhost:${4000}${server.graphqlPath}`);
                });


// METH 2

                                // const express = require('express');
                                // const path = require('path');
                                // const db = require('./config/connection');

                                // const { authMiddleware } = require('./utils/auth');
                                // // const routes = require('./routes');
                                // const { ApolloServer } = require('apollo-server-express');
                                // const { typeDefs, resolvers } = require('./schemas');
                                // // const Router = require('./routes/app');
                                // require('dotenv').config();

                                // const app = express();
                                // const PORT = process.env.PORT || 3001;
                                // const URI = process.env.MONGODB_URI;

                                // const server = new ApolloServer({
                                //         typeDefs,
                                //         resolvers,
                                //         playground: true,
                                //         introspection: true,
                                // });
                                // const serverConfig = async () => {
                                //         await server.start();
                                //         server.applyMiddleware({ app });
                                // };
                                // serverConfig();
                                // // (async function(){
                                // //         var body = await httpGet('link');
                                // //         $.response.setBody(body);
                                // //     })()
                                
                                // // from docs
                                // // await server.start: async () => {
                                //         //     return await User.find().select('-__v -password').populate('savedBooks');
                                //         // },
                                // /*
                                // app.use(express.json());
                                //         const serverConfig = async () => {
                                //                 await server.start();
                                //                 server.applyMiddleware({ app });
                                //         };
                                //         serverConfig();
                                // // app.get("/",(req,res)=>{res.send("Hello there")})
                                // // if we're in production, serve client/build as static assets

                                // if (process.env.NODE_ENV === 'production') {
                                // app.use(express.static(path.join(__dirname, '../client/build')));
                                // }

                                // // app.use("/app",Router)
                                // //       // this
                                // app.get('*', (req, res) => {
                                // res.sendFile(path.join(__dirname, '../client/build/index.html'));
                                // });

                                // // app.get('/guneet/home', (req, res) => {
                                // //         res.sendFile();
                                // // });
                                // */

                                // db.once('open', () => {
                                //         app.listen(PORT, () => {
                                //         console.log(`API server running on port ${PORT}!`);
                                //         console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
                                //         });
                                // });






















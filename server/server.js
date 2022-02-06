require('dotenv').config()
const express = require('express');
const path = require('path');
const dbConnection = require('./config/connection');
// const { authMiddleware } = require('./utils/auth');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');

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

                // app.use(express.urlencoded({ extended: true }));
                // app.use(express.json());

                //                 if (process.env.NODE_ENV === 'production') {
                //                 app.use(express.static(path.join(__dirname, '../client/build')));
                // }


                // app.get('*', (req, res) => {
                // res.sendFile(path.join(__dirname, '../client/build/index.html'));
                // });

                // dbConnection(URI)

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


// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------






// ---------------------------------------------------------------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------



// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');

// const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');

// const db = require('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// const serverConfig = async () => {
//     await server.start();
//     server.applyMiddleware({ app });
//   };
//               serverConfig();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });




// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------




// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------

// using this METHOD
// https://question-it.com/questions/5542607/oshibka-vy-dolzhny-await-serverstart-pered-vyzovom-serverapplymiddleware


// require('dotenv').config()
// const path = require('path');
// const dbConnection = require('./config/connection');

// import { ApolloServer } from 'apollo-server-express';
// import express from 'express';
// import { METHODS } from 'http';

// async function startApolloServer(typeDefs, resolvers) {
//   // Same ApolloServer initialization as before
//   const server = new ApolloServer({ typeDefs, resolvers });

//   // Required logic for integrating with Express
//   await server.start();

//   const app = express();


//   server.applyMiddleware({
//      app,
//   context: authMiddleware,

//      // By default, apollo-server hosts its GraphQL endpoint at the
//      // server root. However, *other* Apollo Server packages host it at
//      // /graphql. Optionally provide this to match apollo-server.
//      path: '/'
//   });

//   dbConnection()


//   // Modified server startup
//   await new Promise(resolve => app.listen({ port: 4000 }, resolve));
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// }



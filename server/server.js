
// METH 1
const express = require('express');
const path = require('path');
const dbConnection = require('./config/connection');

const { authMiddleware } = require('./utils/auth');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
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

dbConnection()

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);


});

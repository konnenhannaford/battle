const express = require('express');
const path = require('path');
        const dbConnection = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
// const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
// const Router = require('./routes/app');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware,
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

dbConnection(URI)

app.listen(PORT, () => {
  console.log(`🌍 Now listening on localhost:${PORT}`);
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});










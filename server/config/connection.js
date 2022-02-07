// const mongoose = require("mongoose");
// require("dotenv").config();

// const dbConnection = (URI) => {
//   try {
//     mongoose.connect(
//       process.env.MONGODB_URI ||
//         "mongodb://localhost:27017/myapp",
//       () => {
//         console.log("Database connected successfully");
//       }
//     );
//   } catch (error) {
//     setTimeout(dbConnection,4000)
//   }
// };

// module.exports = dbConnection;


// const mongoose = require('mongoose');
// require("dotenv").config();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;

const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = (URI) => {
  try {
    const mongoose = require('mongoose')
    // mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/3001/sampledbattles', {
      // mongoose.connect('mongodb://user:user123@cluster0-shard-00-00.arwzj.mongodb.net:27017,cluster0-shard-00-01.arwzj.mongodb.net:27017,cluster0-shard-00-02.arwzj.mongodb.net:27017/songdata?ssl=true&replicaSet=atlas-f3wnz1-shard-0&authSource=admin&retryWrites=true&w=majority', {
        // mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/sampledbattles?retryWrites=true&w=majority', {
          mongoose.connect( 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/sampledbattles?retryWrites=true&w=majority', {
            useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const dbConnection = mongoose.connection
dbConnection.on('error', (err) => console.log(`Connection error ${err}`))
dbConnection.once('open', () => console.log('Connected to DB!'))

  } catch (error) {
    setTimeout(dbConnection,3001)
  }
};

module.exports = dbConnection;


// http://localhost:3001/graphql
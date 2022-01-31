const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = (URI) => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb://localhost:27017/myapp",
      () => {
        console.log("Database connected successfully");
      }
    );
  } catch (error) {
    setTimeout(dbConnection,4000)
  }
};

module.exports = dbConnection;


// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;

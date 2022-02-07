// // METH 1

        const mongoose = require("mongoose");
        require("dotenv").config();

        const dbConnection = (URI) => {
          try {
            const mongoose = require('mongoose')
        // wont Work
              mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sampledbattles', {
        // wont Work
              // mongoose.connect( 'mongodb://localhost/sampledbattles', {
        // this works
              // mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/sampledbattles?retryWrites=true&w=majority', {
        //  this works
              // mongoose.connect( 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/sampledbattles?retryWrites=true&w=majority', {
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


// METH 2
              // const mongoose = require('mongoose');
              // require('dotenv').config();

              // mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/sampledbattles?retryWrites=true&w=majority', {
              // // mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sampledbattles', {
              //   // useNewUrlParser: true,
              //   // useUnifiedTopology: true,
              //   // useCreateIndex: true,
              //   // useFindAndModify: false,
              // }, console.log('mongoDB connected'));

              // module.exports = mongoose.connection;
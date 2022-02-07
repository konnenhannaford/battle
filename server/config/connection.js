// // METH 1

        const mongoose = require("mongoose");
        require("dotenv").config();

        const dbConnection = (URI) => {
          try {
            const mongoose = require('mongoose')
        // wont Work
              mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sampledbattles', {
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

              // // mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sampledbattles', {
              //   // useNewUrlParser: true,
              //   // useUnifiedTopology: true,
              //   // useCreateIndex: true,
              //   // useFindAndModify: false,
              // }, console.log('mongoDB connected'));

              // module.exports = mongoose.connection;
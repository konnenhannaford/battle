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

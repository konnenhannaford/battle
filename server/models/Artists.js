const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const artistSchema = new Schema({
  userName: 
    {
      type: String,
      required: true,
    },
  artistName: 
    {
      type: String,
      required: true,
    },
  artistInfo: {
    type: String,
    required: true,
  },
  Spotify: {
    type: String,
  },
  Apple: {
    type: String,
  },
  Soundcloud: {
    type: String,
  },
  Youtube: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = artistSchema;

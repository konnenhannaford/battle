const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const songsSchema = new Schema({
  submission: {
    type: String,
  },
  submissionInfo: {
    type: String,
  },
  votes: {
    type: Number,
  },
  artist:{
    type: Schema.Types.ObjectId,
    ref: 'Artist'
  }
});

const Songs = model('Songs', songsSchema);

module.exports = Songs;

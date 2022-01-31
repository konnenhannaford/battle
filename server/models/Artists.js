const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const artistSchema = new Schema({
  artist_name: 
    {
      type: String,
      required: true,
    },
  artist_info: {
    type: String,
    required: true,
  },
  spotify: {
    type: String,
  },
  apple: {
    type: String,
  },
  soundcloud: {
    type: String,
  },
  youtube: {
    type: String,
  },
  email:{
    type:String
  }
});
// email added to query by email
const Artists = model('ArtistProfile', artistSchema);
module.exports = Artists;
// module.exports = artistSchema;

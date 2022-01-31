const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const winnersSchema = new Schema({
  artist:{
    type: Schema.Types.ObjectId,
    ref: 'ArtistProfile'
},
songs:
{
  type: Schema.Types.ObjectId,
    ref: 'Songs'
},
});

const Winners = model('Winners', winnersSchema);


module.exports = Winners;
// module.exports = winnersSchema;

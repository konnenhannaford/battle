const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
// can i do without email?
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
password: {
  type: String,
  required: true,
  minlength: 10,
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

artistSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
artistSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
const Artists = model('ArtistProfile', artistSchema);
module.exports = Artists;
// module.exports = artistSchema;

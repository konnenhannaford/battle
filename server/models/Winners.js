// const { Schema, model } = require('mongoose');

// // This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
// const winnersSchema = new Schema({
//   userName: 
//     {
//       type: String,
//       required: true,
//       unique: true,
//     },
//   artistName: 
//     {
//       type: String,
//       required: true,
//     },

//   submission: {
//     type: String,
//   },
//   submissionInfo: {
//     type: String,
//   },
//   votes: {
//     type: String,
//   },
// });

// const Winners = model('Winners', winnersSchema);


// module.exports = Winners;
// // module.exports = winnersSchema;
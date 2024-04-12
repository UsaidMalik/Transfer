const mongoose = require('mongoose')

// users
// have a user name and password
// as well as associated metadata
const User = new mongoose.Schema({
  username: String,
  password: String, // this will be hashsed 
  metadataID: String, // this will provide a reference to user meta data
});


// the metaData associated with a user
// that users id
// their points that theyve earned
// their current streak
// and the friends they interact with
const MetaData = new mongoose.Schema({
  userid: {type: String, required: true},
  points: {type: Number, default: 0, required: true},
  streak: {type: Number, default: 0, required: true},
  friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}]
  
});
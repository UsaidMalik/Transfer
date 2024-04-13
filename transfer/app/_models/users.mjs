import mongoose from "mongoose";

// users
// have a user name and password
// as well as associated metadata
const User = new mongoose.Schema({
    username: String,
    password: String, // this will be hashsed 
    metadataID: String, // this will provide a reference to user meta data
  });
  

  export default mongoose.Model("User", User)
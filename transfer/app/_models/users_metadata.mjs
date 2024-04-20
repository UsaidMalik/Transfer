import mongoose from "mongoose";
import { type } from "os";
import { string } from "zod";
  
  // the metaData associated with a user
  // that users id
  // their points that theyve earned
  // their current streak
  // and the friends they interact with
  const MetaData = new mongoose.Schema({
    userid: {type: String, required: true},
    points: {type: Number, default: 0, required: true},
    streak: {type: Number, default: 0, required: true},
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}],
  });

export default mongoose.Model("User-Metadata", MetaData)
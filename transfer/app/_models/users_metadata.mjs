import mongoose from "mongoose";

  // the metaData associated with a user
  // that users id
  // their points that theyve earned
  // their current streak
  // and the friends they interact with
  const MetaData = new mongoose.Schema({
    userId: {type: String, required: true},
    score: {type: Number, default: 0, required: true},
    streak: {type: Number, default: 0, required: true},
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'List'}],
  });

export default mongoose.Model("User-Metadata", MetaData)
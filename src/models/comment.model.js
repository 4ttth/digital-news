import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const commentSchema = new mongoose.Schema(
  {
    newsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "News",
      required: true,
    },
    guestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest", 
      required: true,
    },
    commentId: {
      type: Number,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    collection: "comments",
    timestamps: true, // createdAt and updatedAt fields for each document
  }
);

commentSchema.plugin(AutoIncrement, { inc_field: "commentId" });
const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
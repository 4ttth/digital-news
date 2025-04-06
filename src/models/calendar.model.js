import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
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
    collection: "events",
    timestamps: true, // createdAt and updatedAt fields for each document
  }
);

const Event = mongoose.model('Event', eventSchema);

export default Event;
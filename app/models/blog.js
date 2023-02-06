import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
  },
  list: {
    type: [String],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
});

export const blog = mongoose.model("blog", blogSchema);

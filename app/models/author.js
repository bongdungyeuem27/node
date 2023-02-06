import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
  },
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

export const author = mongoose.model("author", authorSchema);

import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  id: Number,
});

export const profile = mongoose.model("profile", profileSchema);

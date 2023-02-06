import mongoose from "mongoose";

const businessMessagesSchema = new mongoose.Schema({
  businessId: {
    type: Number,
    required: true,
  },

  employeeId: {
    type: Number,
    required: true,
  },

  date: {
    type: Number,
    required: true,
  },
  type: {
    type: Boolean,
  },
  content: {
    type: String,
  },
});

export const businessMessages = mongoose.model(
  "businessMessages",
  businessMessagesSchema
);

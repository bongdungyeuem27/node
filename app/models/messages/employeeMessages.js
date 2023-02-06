import mongoose from "mongoose";

const employeeMessagesSchema = new mongoose.Schema({
  employeeId: {
    type: Number,
    required: true,
  },
  businessId: {
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

export const employeeMessages = mongoose.model(
  "employeeMessages",
  employeeMessagesSchema
);

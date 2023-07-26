const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const inquirySchema = new Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  phone_number: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;

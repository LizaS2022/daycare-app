const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const studentSchema = new Schema({
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
  date_of_birth: {
    type: Date,
    required: true,
  },
  street_adress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip_code: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
    maxlength: 255,
  },
  special_notes: {
    type: String,
    maxlength: 255,
  },
  mother_first_name: {
    type: String,
    required: true,
  },
  mother_last_name: {
    type: String,
    required: true,
  },
  father_first_name: {
    type: String,
    required: true,
  },
  phone_number1: {
    type: Number,
    required: true,
  },
  phone_number2: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    match: [
      /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
      "Password must contain both letters and numbers",
    ],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

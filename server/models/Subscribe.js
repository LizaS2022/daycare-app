const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
module.exports = Subscriber;

const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  firstName: {
    type: String,
    default: null,
    required: true,
  },
  lastName: {
    type: String,
    default: null,
    required: true,
  },
  phoneNumber: {
    type: String,
    default: null,
    required: true,
  },
  country: {
    type: String,
    default: null,
    required: true,
  },
  city: {
    type: String,
    default: null,
    required: true,
  },
  street: {
    type: String,
    default: null,
    required: true,
  },

  zipCode: {
    type: String,
    default: null,
    required: true,
  },
  homeNumber: {
    type: String,
    default: null,
    required: true,
  },
  floor: {
    type: String,
    default: null,
    required: true,
  },
  apartment: {
    type: String,
    default: null,
    required: true,
  },
});

module.exports = mongoose.model("Profile", profileSchema);

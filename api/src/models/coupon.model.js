const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  categories: {
    type: Array,
    ref: "Category",
  },
  expirationDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Coupon", couponSchema);

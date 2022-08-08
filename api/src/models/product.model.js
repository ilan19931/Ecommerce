const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  attributes: {
    type: Array,
    ref: "Attribute",
  },
  categories: {
    type: Array,
    ref: "Category",
  },
  stock: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);

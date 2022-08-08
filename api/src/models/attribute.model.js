const mongoose = require("mongoose");

const attributeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  values: {
    type: Array,
    required: true,
  },
  category: {
    type: Array,
    ref: "Category",
  },
});

module.exports = mongoose.model("Attribute", attributeSchema);

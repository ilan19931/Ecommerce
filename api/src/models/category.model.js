const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  parentCategory: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);

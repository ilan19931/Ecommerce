const Category = require("../../models/category.model");

async function loadCategories(req, res) {
  try {
    const cats = await Category.find();

    res.send(cats);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { loadCategories };

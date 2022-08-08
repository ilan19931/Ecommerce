const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const Product = require("../../models/product.model");

// @route   GET api/product/
// @desc    get all shop products
// @access  Public
async function getAllProducts(req, res) {
  try {
    const allProducts = await Product.find();

    res.send(allProducts);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

// @route   POST api/product/
// @desc    get all shop products
// @access  Private Admin
async function addProduct(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { name, description, price, images, brand, attributes, categories, discount } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      images,
      brand,
      attributes,
      categories,
      discount,
    });

    await newProduct.save();

    res.send(newProduct);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

// @route   PUT api/product/
// @desc    update product by product id
// @access  Private Admin
async function updateProduct(req, res) {
  try {
    const productId = req.params.productId;
    const newProductDetails = req.body;

    let foundProduct = await Product.findOneAndUpdate({ _id: productId }, newProductDetails);

    if (!foundProduct) {
      return res.status(400).send("Bad Product Id");
    }

    await foundProduct.save();

    const productToReturn = await Product.findById(productId);

    res.send(productToReturn);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

// @route   DELETE api/product/
// @desc    delete product by product id
// @access  Private Admin
async function deleteProduct(req, res) {
  try {
    const productId = req.params.productId;

    const foundProduct = await Product.findById(productId);

    if (!foundProduct) {
      return res.status(400).send({ errors: [{ msg: "Bad Product Id" }] });
    }

    await Product.findOneAndDelete({ _id: productId });

    res.send("Product Deleted");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };

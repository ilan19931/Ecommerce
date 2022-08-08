const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const Cart = require("../../models/cart.model");

// @route   GET api/cart/
// @desc    get cart products
// @access  Private
async function getAllCartProducts(req, res) {
  try {
    const cartProducts = await Cart.find({ userId: req.user._id });
    res.send(cartProducts);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

// @route   POST api/cart/add
// @desc    add product to cart
// @access  Private
async function addProductToCart(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  try {
    const newProduct = req.body.product;
    let isFound = false;

    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      cart = new Cart({
        userId: req.user._id,
        products: [{ product: newProduct, count: 1 }],
      });
    } else {
      // find product in cart
      cart.products = cart.products?.map((product) => {
        if (product.product._id === newProduct._id) {
          product.count++;
          isFound = true;
        }

        return product;
      });

      if (!isFound) {
        cart.products.push({ product: newProduct, count: 1 });
      }
    }

    cart.markModified("products");
    await cart.save();

    res.send({ cart });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

// @route   PUT api/cart/update
// @desc    update cart
// @access  Private
async function updateCart(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const { action, productId } = req.body;
    let isFound = false;

    const cart = await Cart.findOne({ userId: req.user._id });

    if (action === "add") {
      cart.products = cart.products?.map((productMapped) => {
        if (productMapped.product._id === productId) {
          productMapped.count++;

          isFound = true;
        }

        return productMapped;
      });
    } else {
      cart.products = cart.products.filter((productFiltered) => {
        if (productFiltered.product._id === productId) {
          isFound = true;

          if (productFiltered.count === 1) {
            return false;
          } else {
            productFiltered.count--;
            return true;
          }
        }
        return true;
      });
    }

    if (isFound) {
      // check if cart is empty, then delete it from DB
      if (cart.products.length === 0) {
        await Cart.findOneAndDelete({ userId: req.user._id });
        return res.send("empty cart");
      }

      cart.markModified("products");
      await cart.save();

      res.send({ cart });
    } else {
      res.status(400).send({ errors: [{ msg: "Product not found in cart" }] });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

// @route   DELETE api/cart/delete
// @desc    delete cart
// @access  Private
async function deleteCart(req, res) {
  try {
    await Cart.findOneAndDelete({ userId: req.user._id });

    res.send("Cart deleted");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

module.exports = { getAllCartProducts, addProductToCart, updateCart, deleteCart };

const { check } = require("express-validator");
const { userMiddleware } = require("../../middlewares/auth.middlewares");
const { getAllCartProducts, addProductToCart, updateCart, deleteCart } = require("./cart.actions");

const router = require("express").Router();

// @route   GET api/cart/
// @desc    get cart products
// @access  Private
router.get("/", [userMiddleware], (req, res) => getAllCartProducts(req, res));

// @route   POST api/cart/add
// @desc    add product to cart
// @access  Private
router.post(
  "/add",
  [userMiddleware, [check("product", "product can't be empty").not().isEmpty()]],
  (req, res) => addProductToCart(req, res)
);

// @route   PUT api/cart/update
// @desc    update cart
// @access  Private
router.put(
  "/update",
  [
    userMiddleware,
    [
      check("productId", "product id can't be empty").not().isEmpty(),
      check("action", "action can't be empty").not().isEmpty(),
    ],
  ],
  (req, res) => updateCart(req, res)
);

// @route   DELETE api/cart/delete
// @desc    delete cart
// @access  Private
router.delete("/delete", [userMiddleware], (req, res) => deleteCart(req, res));

module.exports = router;

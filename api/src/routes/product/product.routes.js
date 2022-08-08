const { check } = require("express-validator");
const { userMiddleware, ad, adminMiddleware } = require("../../middlewares/auth.middlewares");
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require("./product.actions");

const router = require("express").Router();

// @route   GET api/product/
// @desc    get all shop products
// @access  Public
router.get("/", (req, res) => getAllProducts(req, res));

// @route   POST api/product/
// @desc    get all shop products
// @access  Private
router.post(
  "/",
  [
    adminMiddleware,
    [
      check("name", "name is required").not().isEmpty(),
      check("description", "description is required").not().isEmpty(),
      check("price", "price is required").not().isEmpty(),
      check("brand", "brand is required").not().isEmpty(),
      check("categories", "categories is required").not().isEmpty(),
    ],
  ],
  (req, res) => addProduct(req, res)
);

// @route   PUT api/product/
// @desc    update product by product id
// @access  Private
router.put("/:productId", [adminMiddleware], (req, res) => updateProduct(req, res));

// @route   DELETE api/product/
// @desc    delete product by product id
// @access  Private
router.delete("/:productId", [adminMiddleware], (req, res) => deleteProduct(req, res));

module.exports = router;

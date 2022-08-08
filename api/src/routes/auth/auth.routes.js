const { login, register, auth } = require("./auth.actions");

const router = require("express").Router();
const { check } = require("express-validator");
const { userMiddleware } = require("../../middlewares/auth.middlewares");

// @route   POST api/auth/login
// @desc    login to account
// @access  Private
router.get("/", [userMiddleware], (req, res) => res.send({ user: req.user }));

// @route   GET api/auth/auth
// @desc    check auth
// @access  Private
router.get("/auth", [userMiddleware], (req, res) => auth(req, res));

// @route   POST api/auth/login
// @desc    login to account
// @access  Public
router.post(
  "/login",
  [
    [
      check("email", "email is required!").not().isEmpty(),
      check("password", "password is required!").not().isEmpty(),
    ],
  ],
  (req, res) => login(req, res)
);

// @route   POST api/auth/register
// @desc    create new account
// @access  Public
router.post(
  "/register",
  [
    [
      check("email", "email is required!").not().isEmpty(),
      check("password", "password is required!").not().isEmpty(),
    ],
  ],
  (req, res) => register(req, res)
);

module.exports = router;

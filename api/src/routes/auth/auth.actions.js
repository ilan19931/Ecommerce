const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const User = require("../../models/user.model");
const generateJwtToken = require("../../utils/generateJwtToken");

// @route   GET api/auth/auth
// @desc    check auth
// @access  Private
async function auth(req, res) {
  const token = req.headers["x-auth-token"];

  res.send({ user: req.user, token });
}

// @route   POST api/auth/login
// @desc    login to account
// @access  Public
async function login(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    //check if email exists
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "Wrong details." }] });
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "Wrong details." }] });
    }

    const userToToken = await User.findById(foundUser._id).select("-password");

    const token = generateJwtToken(userToToken);

    res.send({ token, user: userToToken });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

// @route   POST api/auth/register
// @desc    create new account
// @access  Public
async function register(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    //check if email exists
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).send({ errors: [{ msg: "Email is taken" }] });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // save user to DB
    await newUser.save();

    const userToToken = await User.findById(newUser._id).select("-password");

    const token = generateJwtToken(userToToken);

    res.send({ token, user: userToToken });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
}

module.exports = { login, register, auth };

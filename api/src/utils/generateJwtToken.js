const jwt = require("jsonwebtoken");

const generateJwtToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = generateJwtToken;

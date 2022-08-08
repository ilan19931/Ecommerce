const router = require("express").Router();

const { check } = require("express-validator");

const { loadProfile, updateProfile } = require("./profile.actions");
const { userMiddleware } = require("../../middlewares/auth.middlewares");

router.get("/", [userMiddleware], (req, res) => loadProfile(req, res));

router.put(
  "/",
  [
    userMiddleware,
    [
      check("firstName", "First Name is required").not().isEmpty(),
      check("lastName", "Last Name is required").not().isEmpty(),
      check("phoneNumber", "Phone Number is required").not().isEmpty(),
      check("phoneNumber", "Phone Number must be 10 numbers").isLength(10),
      check("country", "Country is required").not().isEmpty(),
      check("city", "City is required").not().isEmpty(),
      check("street", "Street is required").not().isEmpty(),
      check("zipCode", "Zip Code is required").not().isEmpty(),
      check("homeNumber", "Home Number is required").not().isEmpty(),
      check("floor", "Floor is required").not().isEmpty(),
      check("apartment", "Apartment is required").not().isEmpty(),
    ],
  ],
  (req, res) => updateProfile(req, res)
);

module.exports = router;

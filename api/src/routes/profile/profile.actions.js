const { validationResult } = require("express-validator");
const Profile = require("../../models/profile.model");

async function loadProfile(req, res) {
  try {
    const userId = req.user._id;

    const profile = await Profile.findOne({ userId });

    res.send(profile);
  } catch (err) {
    console.log(err);
  }
}

async function updateProfile(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const userId = req.user._id;

    let newProfile = await Profile.findOneAndUpdate({ userId }, req.body, {
      returnDocument: "after",
    });

    if (!newProfile) {
      newProfile = Profile({
        userId,
        ...req.body,
      });

      await newProfile.save();
    }

    res.send(newProfile);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { loadProfile, updateProfile };

const { loadCategories } = require("./category.actions");

const router = require("express").Router();

router.get("/", (req, res) => loadCategories(req, res));

module.exports = router;

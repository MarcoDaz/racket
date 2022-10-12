const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");

router.get("/", HomeController.Index);
router.get("/about", HomeController.About);
router.get("/inflation", HomeController.Inflation)

module.exports = router;
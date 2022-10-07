const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home");
const GraphController = require("../controllers/graph");

router.get("/", GraphController.Index, HomeController.Index);

module.exports = router;
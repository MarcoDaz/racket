const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/products");

router.get("/search", ProductsController.Search);
router.post("/create", ProductsController.Create);

module.exports = router;
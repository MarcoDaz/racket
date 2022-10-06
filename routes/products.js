const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/products");

router.get("/", ProductsController.Index);
router.post("/", ProductsController.Create);

module.exports = router;
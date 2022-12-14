const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/products");

router.get("/all", ProductsController.All)
router.get("/search", ProductsController.Search);
router.post("/create", ProductsController.Create);
router.get("/new", ProductsController.New);
router.get("/list", ProductsController.List);
router.get("/:id", ProductsController.ID);

module.exports = router;
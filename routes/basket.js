const express = require("express");
const BasketController = require("../controllers/basket");
const router = express.Router();

// router.get("/", BasketController.Index);

// Getters:
router.get("/ids", BasketController.Ids)
router.get("/objects", BasketController.Objects);

// Setters
router.post("/add", BasketController.Add);
router.post("/remove", BasketController.Remove);


module.exports = router;
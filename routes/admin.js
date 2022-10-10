const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/admin");

router.get("/", AdminController.Index);
router.get("/tesco", AdminController.TescoUrlsSearch)

module.exports = router;
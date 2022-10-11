const express = require("express");
const AdminController = require("../controllers/admin");
const router = express.Router();

const AdminConroller = require("../controllers/admin");

router.get("/", AdminConroller.Index);
router.get("/tescoUrl", AdminConroller.TescoUrls)
router.get("/tescoObj", AdminController.TescoObject)

module.exports = router;
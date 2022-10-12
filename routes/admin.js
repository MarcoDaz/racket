const express = require("express");
const AdminController = require("../controllers/admin");
const router = express.Router();

const AdminConroller = require("../controllers/admin");

router.get("/", AdminConroller.Index);
router.get("/tescoUrls", AdminConroller.TescoUrls);
router.get("/tescoObj", AdminController.TescoObject);
router.post("/track", AdminConroller.Track);
router.get("/tracked", AdminConroller.Tracked);

module.exports = router;
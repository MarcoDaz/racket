const express = require("express");
const AdminController = require("../controllers/admin");
const router = express.Router();

router.get("/", AdminController.Index);
router.get("/tescoUrls", AdminController.TescoUrls);
router.get("/tescoObj", AdminController.TescoObject);
router.post("/track", AdminController.Track);
router.get("/tracked", AdminController.Tracked);

module.exports = router;
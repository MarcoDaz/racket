const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/", UsersController.New);

module.exports = router;
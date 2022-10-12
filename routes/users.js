const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/new", UsersController.New);
router.post("/", UsersController.Create);

// Getter
router.get("/loginstatus", UsersController.LoginStatus);

module.exports = router;
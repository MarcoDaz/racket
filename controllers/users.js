const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    console.log("############## Now in UserController New ##############")
    res.render("users/new", {});
  },

  Create: (req, res) => {
    console.log("############## Now in UserController Create ##############")
    const user = new User(req.body);
    user.save();
    res.status(201).redirect("/")
  }
}

module.exports = UsersController;
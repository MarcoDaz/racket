const UsersController = {
  New: (req, res) => {
    console.log("############## Now in UserController New ##############")
    res.render("users/new", {});
  }
}

module.exports = UsersController;
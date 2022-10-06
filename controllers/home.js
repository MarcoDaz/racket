const HomeController = {
  Index: (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    res.render("home/index", { inSession: req.session.user });
  }
}

module.exports = HomeController;
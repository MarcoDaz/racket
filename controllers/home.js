const { restart } = require("nodemon");

const HomeController = {
  Index: async (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    res.render("home/index", { title: 'Home', user: req.session.user});
  },

  About: (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    res.render("home/about", { title: 'About', user: req.session.user})
  }
}

module.exports = HomeController;
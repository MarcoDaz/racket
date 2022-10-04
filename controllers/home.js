const HomeController = {
  Index: (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    res.render("home/index", {});
  }
}

module.exports = HomeController;
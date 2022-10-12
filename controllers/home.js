const HomeController = {
  Index: async (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    res.render("home/index", { title: 'Home', user: req.session.user});
  },
  Inflation: async (req, res) => {
    console.log("############## Now in HomeController Inflation ##############")
    
    res.json(result)
  }
}

module.exports = HomeController;
const HomeController = {
  Index: async (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    
    res.render("home/index", { title: 'Home'});
  }
}

module.exports = HomeController;
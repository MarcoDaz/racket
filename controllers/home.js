const getInflation = require('../public/javascripts/inflationAPI.js');


const HomeController = {
  Index: async (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    res.render("home/index", { title: 'Home', user: req.session.user ? true : false });
  },

  About: (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    res.render("home/about", { title: 'About', user: req.session.user})
  },
  
  Inflation: async (req, res) => {
    console.log("############## Now in HomeController Inflation ##############")
    const inflationInfo = await getInflation();

    res.json({inflationInfo: inflationInfo});
  }
}

module.exports = HomeController;
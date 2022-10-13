const phantom = require('phantom');
const getInflation = require('../public/javascripts/inflationAPI.js');
const Product = require("../models/product");


const HomeController = {
  Index: async (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    product = await Product.findOne().exec();
    res.render("home/index", { title: 'Home', user: req.session.user ? true : false, product: product });
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
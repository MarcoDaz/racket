const Chart = require('../models/chart.js');
const products = require('../trolley/products.js');
const Product = require('../models/product.js');

const HomeController = {
  Index: async (req, res) => {
    console.log("############## Now in HomeController Index ##############")
    
    res.render("home/index", { title: 'Home'});
  }
}

module.exports = HomeController;
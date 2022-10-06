const Chart = require('../models/chart.js');
const products = require('../trolley/products.js');
const Product = require('../models/product.js');
const createChart = require('../public/script.js')

const HomeController = {
  Index: async (req, res) => {
    console.log("############## Now in HomeController Index ##############")

    const products = await Product.find().exec();
    
    res.render("home/index", {
      products: products,
      createChart: createChart,
    });
  }
}

module.exports = HomeController;
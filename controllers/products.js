const Product = require("../models/product");

const ProductsController = {
  ID: async (req, res) => {
    console.log("############# Now in ProductsController ID #################")
    const productID = req.params.id;
    let product = false;
    try {
      product = await Product.findById(productID).exec();
      console.log(product);
    } catch (error) {
      
    }
  
    res.render("products/index", {product: product});
  },

  New: (req, res) => {
    console.log("############## Now in ProductsController New ##############")
    res.render("products/new", {});
  },

  Create: (req, res) => {
    console.log("############## Now in ProductsController Create ##############")
    const product = new Product(req.body);
    product.save();
    res.status(201).redirect("/")
  }
}

module.exports = ProductsController;
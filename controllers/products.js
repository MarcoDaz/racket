const Product = require("../models/product");

const ProductsController = {
  Index: (req, res) => {
    console.log("############## Now in ProductController New ##############")
    res.render("products/index", {});
  },

  Create: (req, res) => {
    console.log("############## Now in ProductController Create ##############")
    const product = new Product(req.body);
    product.save();
    res.status(201).redirect("/")
  }
}

module.exports = ProductsController;
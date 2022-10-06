const Product = require("../models/product");

const ProductsController = {
  Index: (req, res) => {
    console.log("############## Now in ProductsController Index ##############")
    res.render("products/index", {});
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
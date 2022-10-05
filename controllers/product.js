const Product = require("../models/product");

const ProductController = {
  Index: (req, res) => {
    console.log("############## Now in ProductController New ##############")
    res.render("product/new", {});
  },

  Create: (req, res) => {
    console.log("############## Now in ProductController Create ##############")
    const product = new Product(req.body);
    product.save();
    res.status(201).redirect("/")
  }
}

module.exports = ProductController;
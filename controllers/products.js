const Product = require("../models/product");

const ProductsController = {
  Index: async (req, res) => {
    console.log("############## Now in ProductsController Index ##############")
    const products = await Product.find().exec();

    res.render("products/index", {products: products});
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
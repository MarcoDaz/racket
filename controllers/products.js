const Product = require("../models/product");

const ProductsController = {
  Index: async (req, res) => {
    console.log("############## Now in ProductController New ##############")
    const products = await Product.find().exec();
    console.log(`${products.length} total products`);
    res.render("products/index", { products: products });
  },

  Create: (req, res) => {
    console.log("############## Now in ProductController Create ##############")
    const product = new Product(req.body);
    product.save();
    res.status(201).redirect("/")
  }
}

module.exports = ProductsController;
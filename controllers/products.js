const Product = require("../models/product");

const ProductsController = {
  Search: async (req, res) => {
    console.log("###### Now in ./controllers/products SEARCH ######");
    const searchTerm = req.query.searchTerm;

    let results = null;
    if (searchTerm) {
      results = await Product.find({
        name: new RegExp(searchTerm, "i")
      }).exec();
    }
    

    res.json(results || "No Search Term Given");
  },

  Create: (req, res) => {
    console.log("###### Now in ./controllers/products Create ######");
    const product = new Product(req.body);
    product.save();
    res.status(201).redirect("/");
  }
}

module.exports = ProductsController;
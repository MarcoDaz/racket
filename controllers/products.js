const Product = require("../models/product");

const ProductsController = {
  All: async (req, res) => {
    console.log("###### Now in ./controllers/products All ######");

    const products = await Product.find().exec();

    res.json(products);
  },

  Search: async (req, res) => {
    console.log("###### Now in ./controllers/products Search ######");
    const searchTerm = req.query.searchTerm.trim();

    let results = null;
    if (searchTerm) {
      results = await Product.find({
        name: new RegExp(searchTerm, "i"),
      }).exec();
    }

    res.json(results);
  },

  Create: (req, res) => {
    console.log("###### Now in ./controllers/products Create ######");
    const product = new Product(req.body);
    product.save();
    res.status(201).redirect("/");
  },
};

module.exports = ProductsController;

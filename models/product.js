const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: [String],
  prices: [{ price: String, date: Date }]
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
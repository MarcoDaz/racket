const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: [String],
  prices: [{ price: Number, date: Date }],
  tescoId: String
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
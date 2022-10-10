const mongoose = require('mongoose');
const products = require('./products');
const Product = require('../models/product');

// connect to mongoDb
const mongoDbUrl = "mongodb://0.0.0.0/racket";
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Product.create(products).then(() => {
  console.log('products saved!')
});

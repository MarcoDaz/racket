const mongoose = require("mongoose");
const Product = require('../models/product');
const axios = require("axios");
const getProduct = require("./getProduct");

// connect to mongoDb
const mongoDbUrl = "mongodb://0.0.0.0/racket";
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const log100 = async (start) => {
  for (let i = start; i < start + 100; i++) {
    const product = await getProduct(i);
    
    if (product) {
      await Product.create(product);
    };
  }
};

module.exports  = log100;
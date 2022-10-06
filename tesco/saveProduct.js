const mongoose = require('mongoose');
const Product = require('../models/product');
const getProducts = require('./getSearch');
const getProduct = require('./getProduct');

// connect to mongoDb
const mongoDbUrl = "mongodb://0.0.0.0/racket";
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const saveProductByUrl = async (apiUrl) => {
  const product = await getProduct(apiUrl);
  Product.create(product).then(() => {
    console.log(`Saved - ${product.name}`)
  });
}

const saveProductsBySearch = async (searchTerm) => {
  const products = await getProducts(searchTerm);

  console.log(`Found ${products.length} products`)

  products.forEach((product) => {
    Product.create(product).then(() => {
      console.log(`Saved - ${product.name}`)
    });
  })
}

// EXAMPLE: saves 14 items
saveProductsBySearch('salt snack')

// close connection
// mongoose.connection.close(true);
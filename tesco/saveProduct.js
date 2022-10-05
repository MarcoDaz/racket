const mongoose = require('mongoose');
const Product = require('../models/product');
const getProducts = require('./getSearch')

// connect to mongoDb
const mongoDbUrl = "mongodb://0.0.0.0/racket";
mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const saveProductBySearch = async (searchTerm) => {
  const products = await getProducts(searchTerm);

  console.log(`Found ${products.length} products`)

  products.forEach((product) => {
    Product.create(product).then(() => {
      console.log(`Saved - ${product.name}`)
    });
  })
}

// EXAMPLE: saves 14 items
// saveProductBySearch('salt snack')

// close connection
// mongoose.connection.close(true);
const Product = require("../models/product");

const ProductsController = {
  All: async (req, res) => {
    console.log("###### Now in ./controllers/products All ######");

    let products = await Product.find().exec();

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

  ID: async (req, res) => {
    console.log("############# Now in ProductsController ID #################")
    const productID = req.params.id;
    let product = false;
    let sortByPrice;
    let change;
    try {
      product = await Product.findById(productID).exec();
      sortByPrice = product.prices.slice().sort((priceObj1, priceObj2) => {
        return priceObj1.price - priceObj2.price
      } )

      change = (product.prices[product.prices.length - 1].price - product.prices[0].price) / product.prices[0].price * 100

      //console.log(sortByPrice.map(obj => obj.price));
    } catch (error) {
      
    }
    
    res.render("products/index", {title: "Product", user: req.session.user, product: product, change: change, lowestPrice: sortByPrice[0], highestPrice: sortByPrice[sortByPrice.length - 1]});
  },

  New: (req, res) => {
    console.log("############## Now in ProductsController New ##############")
    res.render("products/new", {});
  },

  Create: (req, res) => {
    console.log("###### Now in ./controllers/products Create ######");
    const product = new Product(req.body);
    product.save();
    res.status(201).redirect("/");
  },

  List: (req, res) => {
    console.log("###### Now in ProductsController List ######");
    res.render("products/list", {title: "Products", user: req.session.user ? true : false });
  }
};

module.exports = ProductsController;

const getUrlsBySearch = require("../public/javascripts/tesco/getUrlsBySearch");
const getProductByUrl = require("../public/javascripts/tesco/getProductByUrl");
const Product = require("../models/product");

const AdminController = {
  Index: (req, res) => {
    console.log("############## GO GO POWER ADMIN ##############");

    res.render("admin/index", { user: true, layout: "../views/layout" });
  },
  TescoUrls: async (req, res) => {
    const searchTerm = req.query.searchTerm.trim();
    const page = req.query.page;
    
    console.log("Searching for:", searchTerm)
    const tescoUrls = await getUrlsBySearch(searchTerm, page);

    res.json(tescoUrls);
  },
  TescoObject: async (req, res) => {
    const tescoUrl = req.query.tescoUrl;
    const tescoObj = await getProductByUrl(tescoUrl);

    res.json(tescoObj);
  },
  Track: (req, res) => {
    const tescoObj = req.body.tescoObj;
    console.log(tescoObj);
    const product = new Product({
      ...tescoObj,
      prices: {
        price: tescoObj.price.value,
        date: tescoObj.price.date
      }
    });
    console.log("product", product)
    product.save((err) => {
      if (err) {
        console.log(err);
        res.status(500);
      } else {
        res.status(201)
      }
    })
  },
  Tracked: async (req, res) => {
    const tescoId = req.query.tescoId;
    if (tescoId) {
      const product = await Product.findOne({ tescoId: tescoId });
  
      if (product) {
        res.json(product);
      } else {
        res.json(false);
      }
      
    } else {
      res.status(500);
    }
  }
}

module.exports = AdminController;
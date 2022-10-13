const User = require("../models/user");
const Product = require("../models/product");

const BasketController = {
  Index: (req, res) => {
    if (req.session.user) {
      res.render("basket/index", { user: req.session.user });
    } else {
      res.redirect("/sessions/new")
    }
  },

  Ids: async (req, res) => {
    const userId = req.session.user._id;
    const user = await User.findById(userId);
    
    res.json(user.basket);
  },

  Objects: async (req, res) => {
    // Fetch user information
    const userId = req.session.user._id;
    const user = await User.findById(userId);

    // Find all product objects
    const basketIdArr = user.basket;
    const basketObjArr = await Promise.all(
      basketIdArr.map(async (productId) => {
        const product = await Product.findById(productId);
        return product;
      })
    );
    
    res.json(basketObjArr);
  },

  Add: async (req, res) => {
    // add productId to basket
    const userId = req.session.user._id;
    const productId = req.body.productId;
    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { basket: productId } },
      { returnDocument: "after" }
    ).exec();
    
    // redirect to fetch array of product objects
    res.status(201).redirect("/basket/objects")
  },

  Remove: async (req, res) => {
    // remove productId from basket
    const userId = req.session.user._id;
    const productId = req.body.productId;
    console.log("user", userId)
    console.log("product", productId)
    const user = await User.findByIdAndUpdate(
      userId,
      { $pullAll: { basket: [productId] } },
      { returnDocument: "after" }
    ).exec();
    console.log(user);

    // redirect to fetch array of product objects
    res.status(201).redirect("/basket/objects")
  }
  
}

module.exports = BasketController;
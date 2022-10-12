const BasketController = {
  Index: (req, res) => {
    res.render("basket/index", {
      basket: req.session.user.basket
    });
  }
}

module.exports = BasketController;
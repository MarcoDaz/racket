const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "Racket" , signedIn: req.session.signedIn, isHomePage: true});
  },
};

module.exports = HomeController;
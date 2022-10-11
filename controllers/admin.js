const getUrlsBySearch = require("../public/javascripts/tesco/getUrlsBySearch");
const getProductByUrl = require("../public/javascripts/tesco/getProductByUrl");

const AdminController = {
  Index: (req, res) => {
    console.log("############## GO GO POWER ADMIN ##############");

    res.render("admin/index");
  },
  TescoUrls: async (req, res) => {
    const searchTerm = req.query.searchTerm.trim();
    
    console.log("Searching for:", searchTerm)
    const tescoUrls = await getUrlsBySearch(searchTerm);

    res.json(tescoUrls);
  },
  TescoObject: async (req, res) => {
    const tescoUrl = req.query.tescoUrl;
    const tescoObj = await getProductByUrl(tescoUrl);

    res.json(tescoObj);
  }
}

module.exports = AdminController;
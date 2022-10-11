const getUrlsBySearch = require("../public/javascripts/tesco/getUrlsBySearch");
const getProductByUrl = require("../public/javascripts/tesco/getProductByUrl");

const AdminController = {
  Index: (req, res) => {
    console.log("############## GO GO POWER ADMIN ##############");

    res.render("admin/index");
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
  }
}

module.exports = AdminController;
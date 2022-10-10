const getUrls = require("../utilities/admin/getAllUrlsBySearch");

const AdminController = {
  Index: (req, res) => {

    res.render("admin/index");
  },

  TescoUrlsSearch: async (req, res) => {
    const searchTerm = req.body.tescoSearchTerm;
    const tescoUrls = await getUrls(searchTerm);
    console.log(tescoUrls);

    res.json(tescoUrls);
  }
};

module.exports = AdminController;
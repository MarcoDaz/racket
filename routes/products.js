const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/products");

/*
get '/spaces/:id' do
@is_signed_in = session[:id]

repo = SpaceRepository.new
@space = repo.find(params[:id])
return erb(:space)
end
*/

router.get("/new", ProductsController.New);
router.post("/", ProductsController.Create);
router.get("/:id", ProductsController.ID);


module.exports = router;
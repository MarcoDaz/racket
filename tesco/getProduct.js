const axios = require("axios");
const getScriptContent = require("./getScriptContent");

const getProductById = async (tesco_id) => {
  const apiUrl  = `https://www.tesco.com/groceries/en-GB/products/${tesco_id}`;
  try {
    const response = await axios.get(apiUrl);

    const htmlString = response.data;
    const product = getScriptContent(htmlString);

    const neatProduct = {
      tescoId: product.sku,
      name: product.name,
      images: product.image,
      description: product.description,
      price: product.offers.price
    }
  
    return neatProduct;

  } catch (error) {
    console.log(`${tesco_id} not found`);
    return null;
  };
};

module.exports = getProductById;
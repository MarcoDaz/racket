const axios = require("axios");
const getScriptContent = require("./getScriptContent");

const getProductByUrl = async (apiUrl) => {
  const response = await axios.get(apiUrl);

  const htmlString = response.data;
  const product = getScriptContent(htmlString);

  const neatProduct = {
    tescoId: product.sku,
    name: product.name,
    images: product.image,
    description: product.description,
    price: {
      value: product.offers.price,
      date: Date.now()
    }
  }

  console.log(`Found ${product.sku} -  ${product.name}`);

  return neatProduct;
};

module.exports = getProductByUrl;
const axios = require("axios");
const getScriptContent = require("./getScriptContent");

const getProductByUrl = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl);

    const htmlString = response.data;
    const product = getScriptContent(htmlString);

    const neatProduct = {
      tescoId: product.sku,
      name: product.name,
      images: product.image,
      description: product.description,
      prices: [
        {
          price: product.offers.price,
          date: Date.now()
        }
      ]
    }
  
    console.log(`Found ${product.sku} -  ${product.name}`);

    return neatProduct;
node
  } catch (error) {
    console.log(`${tesco_id} not found`);
    return null;
  };
};

const getProductById = async (tesco_id) => {
  const apiUrl  = `https://www.tesco.com/groceries/en-GB/products/${tesco_id}`;
  const product = await getProductByUrl(apiUrl);

  return product;
};

module.exports = getProductByUrl;
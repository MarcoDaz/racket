const axios = require("axios");
const getScriptContent = require('./getScriptContent');
const getProduct = require('./getProduct');
const Product = require('../models/product')

const getUrlsBySearch = async (searchTerm, page = 1) => {
  try {
    const apiUrl = `https://www.tesco.com/groceries/en-GB/search?query=${searchTerm}&page=${page}`;

    const response = await axios.get(apiUrl);
    const htmlString = response.data;
    const responseObj = getScriptContent(htmlString);

    const urls = responseObj
      .itemListElement
      .map(item => item.url)

    return urls;
  } catch (error) {
    return null;
  }
};

const getAllUrlsBySearch = async (searchTerm) => {
  let urls = [];
  let page = 1;
  let resIsValid = true;
  do {
    try {
      const responseUrls = await getUrlsBySearch(searchTerm, page); 
      if (responseUrls.length >= 1) {
        urls = [...urls, ...responseUrls];
        page++;
      }
    } catch (error) {
      resIsValid = false;
    }
  } while (resIsValid);

  return urls;
}

const getAllProductsBySearch = async (searchTerm) => {
  try {
    const urls = await getAllUrlsBySearch(searchTerm);
    const products = await Promise.all(
      urls.map(async (apiUrl) => {
        const product = await getProduct(apiUrl);
        return product;
      })
    );

    return products;
  } catch (error) {
    console.log('tesco search failed')
  }
}

// EXAMPLE: returns 14 items on 05/10/2022
// getAllUrlsBySearch('salt snack').then(result => {
//   console.log(result);
//   console.log('length:', result.length);
// });

// EXAMPLE: returns 14 items on 05/10/2022
getAllProductsBySearch('salt snack').then(result => {
  console.log(result);
});

module.exports = getAllProductsBySearch;
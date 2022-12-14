const axios = require("axios");
const getScriptContent = require("./getScriptContent");

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
    return [];
  }
};

module.exports = getUrlsBySearch;
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
    return null;
  }
};

getUrlsBySearch("Salty Snacks")

// const getAllUrlsBySearch = async (searchTerm) => {
//   let urls = [];
//   let page = 1;
//   let resIsValid = true;
//   do {
//     try {
//       const responseUrls = await getUrlsBySearch(searchTerm, page); 
//       if (responseUrls.length >= 1) {
//         urls = [...urls, ...responseUrls];
//         page++;
//       }
//     } catch (error) {
//       resIsValid = false;
//     }
//   } while (resIsValid);

//   return urls;
// }

module.exports = getUrlsBySearch;
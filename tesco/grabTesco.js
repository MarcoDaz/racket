const axios = require("axios");
const getProduct = require("./getProduct");

const log100 = async (start, end = start + 100) => {
  for (let i = start; i < end; i++) {
    const product = await getProduct(i);
    if (product) console.log(product.name);
  }
};

log100(296901996 - 10)
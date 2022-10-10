// manually input data using console

const prompt = require('prompt-sync')();
const fs = require('fs');

const products = [];
// i = how many products to add
for (let i = 0; i < 10; i++) {
  const product = {};

  product.name = prompt('Name: ');
  product.description = prompt('Description: ')

  const dates = [
    '2021-09-05',
    '2021-10-05',
    '2021-11-05',
    '2021-12-05',
    '2022-01-05',
    '2022-02-05',
    '2022-03-05',
    '2022-04-05',
    '2022-05-05',
    '2022-06-05',
    '2022-07-05',
    '2022-08-05',
    '2022-09-05',
  ]

  product.prices = []
  dates.forEach((date) => {
    const price = Number(prompt(`${date} - Price: `));
    product.prices.push({
      price: price, date: date
    })
  })

  products.push(product);
}

// Uncomment to write to a file i.e. products.js
// fs.writeFile('products.js', JSON.stringify(products), function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
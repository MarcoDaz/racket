const products = [
  {
    name: "Milk",
    description: "223 products",
    prices: [
      { price: 1.35, date: "2021-09-05" },
      { price: 1.36, date: "2021-10-05" },
      { price: 1.39, date: "2021-11-05" },
      { price: 1.42, date: "2021-12-05" },
      { price: 1.43, date: "2022-01-05" },
      { price: 1.45, date: "2022-02-05" },
      { price: 1.44, date: "2022-03-05" },
      { price: 1.48, date: "2022-04-05" },
      { price: 1.52, date: "2022-05-05" },
      { price: 1.59, date: "2022-06-05" },
      { price: 1.66, date: "2022-07-05" },
      { price: 1.7, date: "2022-08-05" },
      { price: 1.71, date: "2022-09-05" },
    ],
  },
  {
    name: "Gin",
    description: "257 products",
    prices: [
      { price: 19.42, date: "2021-09-05" },
      { price: 19.26, date: "2021-10-05" },
      { price: 19.33, date: "2021-11-05" },
      { price: 18.45, date: "2021-12-05" },
      { price: 20.1, date: "2022-01-05" },
      { price: 19.52, date: "2022-02-05" },
      { price: 19.48, date: "2022-03-05" },
      { price: 19.4, date: "2022-04-05" },
      { price: 19.64, date: "2022-05-05" },
      { price: 19.31, date: "2022-06-05" },
      { price: 19.47, date: "2022-07-05" },
      { price: 19.31, date: "2022-08-05" },
      { price: 19.46, date: "2022-09-05" },
    ],
  },
  {
    name: "Butter",
    description: "94 products",
    prices: [
      { price: 2.59, date: "2021-09-05" },
      { price: 2.59, date: "2021-10-05" },
      { price: 2.63, date: "2021-11-05" },
      { price: 2.66, date: "2021-12-05" },
      { price: 2.6, date: "2022-01-05" },
      { price: 2.73, date: "2022-02-05" },
      { price: 2.73, date: "2022-03-05" },
      { price: 2.87, date: "2022-04-05" },
      { price: 3.09, date: "2022-05-05" },
      { price: 3.1, date: "2022-06-05" },
      { price: 3.16, date: "2022-07-05" },
      { price: 3.18, date: "2022-08-05" },
      { price: 3.2, date: "2022-09-05" },
    ],
  },
  {
    name: "Toilet Rolls",
    description: "120 products",
    prices: [
      { price: 4.58, date: "2021-09-05" },
      { price: 4.59, date: "2021-10-05" },
      { price: 4.65, date: "2021-11-05" },
      { price: 4.65, date: "2021-12-05" },
      { price: 4.69, date: "2022-01-05" },
      { price: 4.8, date: "2022-02-05" },
      { price: 4.8, date: "2022-03-05" },
      { price: 4.88, date: "2022-04-05" },
      { price: 5.05, date: "2022-05-05" },
      { price: 5.15, date: "2022-06-05" },
      { price: 5.18, date: "2022-07-05" },
      { price: 5.22, date: "2022-08-05" },
      { price: 5.4, date: "2022-09-05" },
    ],
  },
  {
    name: "Vodka",
    description: "135 products",
    prices: [
      { price: 18.23, date: "2021-09-05" },
      { price: 17.91, date: "2021-10-05" },
      { price: 18.09, date: "2021-11-05" },
      { price: 17.28, date: "2021-12-05" },
      { price: 18.68, date: "2022-01-05" },
      { price: 18.17, date: "2022-02-05" },
      { price: 18.5, date: "2022-03-05" },
      { price: 18.17, date: "2022-04-05" },
      { price: 18.17, date: "2022-05-05" },
      { price: 18.35, date: "2022-06-05" },
      { price: 17.95, date: "2022-07-05" },
      { price: 18.23, date: "2022-08-05" },
      { price: 18.23, date: "2022-09-05" },
    ],
  },
  {
    name: "Sunflower Oil",
    description: "37 products",
    prices: [
      { price: 2.94, date: "2021-09-05" },
      { price: 2.98, date: "2021-10-05" },
      { price: 3, date: "2021-11-05" },
      { price: 2.99, date: "2021-12-05" },
      { price: 3, date: "2022-01-05" },
      { price: 3.03, date: "2022-02-05" },
      { price: 3.03, date: "2022-03-05" },
      { price: 3.09, date: "2022-04-05" },
      { price: 3.17, date: "2022-05-05" },
      { price: 3.47, date: "2022-06-05" },
      { price: 3.61, date: "2022-07-05" },
      { price: 3.92, date: "2022-08-05" },
      { price: 3.92, date: "2022-09-05" },
    ],
  },
  {
    name: "Chicken Breast",
    description: "154 products",
    prices: [
      { price: 4.09, date: "2021-09-05" },
      { price: 4.12, date: "2021-10-05" },
      { price: 4.12, date: "2021-11-05" },
      { price: 4.2, date: "2021-12-05" },
      { price: 4.34, date: "2022-01-05" },
      { price: 4.36, date: "2022-02-05" },
      { price: 4.37, date: "2022-03-05" },
      { price: 4.52, date: "2022-04-05" },
      { price: 4.66, date: "2022-05-05" },
      { price: 4.64, date: "2022-06-05" },
      { price: 4.73, date: "2022-07-05" },
      { price: 4.77, date: "2022-08-05" },
      { price: 4.8, date: "2022-09-05" },
    ],
  },
  {
    name: "Semi-Skimmed Milk",
    description: "130 products",
    prices: [
      { price: 1.3, date: "2021-09-05" },
      { price: 1.32, date: "2021-10-05" },
      { price: 1.34, date: "2021-11-05" },
      { price: 1.36, date: "2021-12-05" },
      { price: 1.38, date: "2022-01-05" },
      { price: 1.39, date: "2022-02-05" },
      { price: 1.39, date: "2022-03-05" },
      { price: 1.42, date: "2022-04-05" },
      { price: 1.47, date: "2022-05-05" },
      { price: 1.54, date: "2022-06-05" },
      { price: 1.61, date: "2022-07-05" },
      { price: 1.64, date: "2022-08-05" },
      { price: 1.66, date: "2022-09-05" },
    ],
  },
  {
    name: "Eggs",
    description: "137 products",
    prices: [
      { price: 2.08, date: "2021-09-05" },
      { price: 2.09, date: "2021-10-05" },
      { price: 2.09, date: "2021-11-05" },
      { price: 2.12, date: "2021-12-05" },
      { price: 2.14, date: "2022-01-05" },
      { price: 2.14, date: "2022-02-05" },
      { price: 2.15, date: "2022-03-05" },
      { price: 2.2, date: "2022-04-05" },
      { price: 2.23, date: "2022-05-05" },
      { price: 2.27, date: "2022-06-05" },
      { price: 2.28, date: "2022-07-05" },
      { price: 2.31, date: "2022-08-05" },
      { price: 2.33, date: "2022-09-05" },
    ],
  },
  {
    name: "Baked Beans",
    description: "98 products",
    prices: [
      { price: 1.4, date: "2021-09-05" },
      { price: 1.41, date: "2021-10-05" },
      { price: 1.45, date: "2021-11-05" },
      { price: 1.5, date: "2021-12-05" },
      { price: 1.49, date: "2022-01-05" },
      { price: 1.51, date: "2022-02-05" },
      { price: 1.51, date: "2022-03-05" },
      { price: 1.53, date: "2022-04-05" },
      { price: 1.52, date: "2022-05-05" },
      { price: 1.64, date: "2022-06-05" },
      { price: 1.68, date: "2022-07-05" },
      { price: 1.71, date: "2022-08-05" },
      { price: 1.71, date: "2022-09-05" },
    ],
  },
];

module.exports = products;
// Call this function for every product to generate a graph on an existing canvas tag

// Given a product object
const applyChart = (product) => {
  // Grab the existing canvas with the relevant id
  const ctx = document.getElementById(product._id).getContext("2d");

  // prices for chart
  const productPrices = product.prices.map((yoke) => {
    return yoke.price;
  });

  const inflationRates = [
    {date:'2021_SEP', rate:	2.9},
    {date:'2021_OCT', rate:	3.8},
    {date:'2021_NOV', rate:	4.6},
    {date:'2021_DEC', rate:	4.8},
    {date:'2022_JAN', rate:	4.9},
    {date:'2022_FEB', rate:	5.5},
    {date:'2022_MAR', rate:	6.2},
    {date:'2022_APR', rate:	7.8},
    {date:'2019_MAY', rate:	7.9},
    {date:'2022_JUN', rate:	8.2},
    {date:'2022_JUL', rate:	8.8},
    {date:'2022_AUG', rate:	8.6},
  ]

  // dates for chart
  const productDates = product.prices.map((yoke) => {
    const options = { year: "numeric", month: "long" };
    const date = new Date(yoke.date);
    return date.toLocaleDateString("en-US", options);
  });

  // Apply chart.js
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: productDates,
      datasets: [
        {
          label: product.name,
          data: productPrices,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 3,
          tension: 0.5,
          pointHoverRadius: 10,
          yAxisID: 'y',
        },
        {
          labels: "Inflation rate",
          data: inflationRates.map((yoke) => {return yoke.rate}),
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(155, 9, 232, 2)"],
          borderWidth: 3,
          tension: 0.5,
          pointHoverRadius: 10,
          yAxisID: 'y1',
        }
      ],
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
        },
        grid: {
          drawOnChartArea: false,
        }
      },
    },
  });
};

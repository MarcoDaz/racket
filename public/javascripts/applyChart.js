// Call this function for every product to generate a graph on an existing canvas tag

// Given a product object
const applyChart = (product) => {
  // Grab the existing canvas with the relevant id
  const ctx = document.getElementById(product._id).getContext("2d");

  // prices for chart
  const productPrices = product.prices.map((yoke) => {
    return yoke.price;
  });

  const inflationRates = product.prices.map((yoke) => {
    return yoke.inflation;
  });

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
          label: "Inflation rate",
          data: inflationRates,
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
      stacked: false,
      plugins: {
        legend: {
          display: true,
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
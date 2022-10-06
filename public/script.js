// const Chart = require('chart.js');


// ideally this script will appear in each iteration of our products

// then the EJS file will iterate through our products
// and call this script for every product to generate a graph

const createChart = (product) => {
  const ctx = document.getElementById(product._id).getContext('2d');
  const productPrices = product.prices.map(yoke => {
    return yoke.price
  })
  const productDates = product.prices.map(yoke => {
    return yoke.date.substring(0, 7);
  })
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: productDates,
        datasets: [{
            label: product.name,
            data: productPrices,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 3,
            tension: 0.5
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
            y: {
                min: Math.min.apply(null, productPrices) - ((Math.min.apply(null, productPrices)/10)),
                max: Math.max.apply(null, productPrices) + ((Math.min.apply(null, productPrices)/10)),
                beginAtZero: false
            },
            x: {
                // min: 5
            }
        }
    }
});
}

// module.exports = createChart;
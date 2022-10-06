// const Chart = require('chart.js');


// ideally this script will appear in each iteration of our products

// then the EJS file will iterate through our products
// and call this script for every product to generate a graph

const createChart = (product) => {
    var options = { 
        "responsive": true,
        "maintainAspectRatio": false
    }
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {

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
const createCharts = (products, htmlId) => {
  // create canvases
  const container = document.getElementById(htmlId);
  const html = products.map((product) => (`
    <a href="products/${product._id}">
      <h1>${product.name}</h1>
    </a>
    <canvas id="${product._id}" width="300" height="300"></canvas>
  `));
  container.innerHTML = html;

  // create charts
  products.forEach((product) => {
    applyChart(product);
  })
}
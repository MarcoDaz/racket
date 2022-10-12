const createCharts = (products, htmlId) => {
  // create canvases
  const container = document.getElementById(htmlId);
  const html = products.map((product) => (`
  <div class="product-container">
    <a href="products/${product._id}" data-cy="product">
      <h4>${product.name}</h4>
    </a>
    <canvas id="${product._id}" width="239" height="320" ></canvas>
    <button class="add-to-cart" data-product-name="${product.name}">Track</button>
  </div>
  `));
  container.innerHTML = html;

  // create charts
  products.forEach((product) => {
    applyChart(product);
  })
}
const createCharts = async (products, htmlId) => {
  // create canvases
  const container = document.getElementById(htmlId);
  const html = await Promise.all(
    products.map(async (product) => (`
      <div class="product-container">
        <a href="products/${product._id}" data-cy="product">
          <h4>${product.name}</h4>
        </a>
        <canvas id="${product._id}" width="239" height="320" ></canvas>
        ${await createTrackHtml(product)}
      </div>
    `))
  );

  container.innerHTML = html;

  // create charts
  products.forEach((product) => {
    applyChart(product);
  })
}

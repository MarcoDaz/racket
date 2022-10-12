const loggedOutTrackHtml = `
  <a href="/sessions/new">
    <button class="add-to-cart">
      Track
    </button>
  </a>  
`;

const createCharts = (products, htmlId) => {
  // create canvases
  const container = document.getElementById(htmlId);
  const html = products.map((product) => (`
    <div class="product-container">
      <a href="products/${product._id}">
        <h4>${product.name}</h4>
      </a>
      <canvas id="${product._id}" width="239" height="320" ></canvas>
      ${isLoggedIn ? createTrackHtml(product) : loggedOutTrackHtml }
    </div>
  `));
  container.innerHTML = html;

  // create charts
  products.forEach((product) => {
    applyChart(product);
  })
}

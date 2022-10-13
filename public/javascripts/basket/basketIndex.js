const basketDiv = document.getElementById("my-basket");

// create product: track or tracked html
createTrackHtml = async (product, basket) => {
  // check if in basket
  const basketIds = basket.map(prod => prod._id)
  const isTracked = basket.includes(product._id)

  let html;

  if (!isTracked) {
    html = `
      <button
        class="add-to-cart"
        id="${product._id}-button"
        onclick="untrack('${product._id}')"
      >
        Untrack
      </button>
    `
  } else {
    html = `
      <button
        class="add-to-cart"
        id="${product._id}-button"
        onclick="track('${product._id}')"
      >
        Track
      </button>
    `
  }

  return html;
};

// display basket
const displayBasket = async () => {
  const basket = await fetchBasketObjects();
  
  const basketHtml = await Promise.all(
    basket.map(async (product) => {
      const buttonHtml = await createTrackHtml(product, basket);
      const productHtml = `
        <div>
          <h3>
            <strong>£ ${product.prices[0].price.toFixed(2)}</strong>
            <a href="/products/${product._id}">
              ${product.name}
            </a>
          </h3>
          ${buttonHtml}
        </div>
      `;

      return productHtml;
    })
  )
  console.log(basketHtml);
  basketDiv.innerHTML = basketHtml.join("");
}

const updateTotal = async () => {
  const basket = await fetchBasketObjects();
  const currentPrices = basket.map(product => (
    product.prices[0].price
  ));
  const lastPrices = basket.map(product => (
    product.prices[1].price
  ))


  const currentSum = currentPrices.reduce((partialSum, a) => partialSum + a, 0)
  const lastSum = lastPrices.reduce((partialSum, a) => partialSum + a, 0)
  
  const totalDiv = document.getElementById("total");
  totalDiv.innerHTML = `
    <h2>Last Month's Price: £ ${currentSum.toFixed(2)}</h2>
    <h2>Current Price: £ ${lastSum.toFixed(2)}</h2>
  `
}

const track = async (productId) => {
  // disable button
  const button = document.getElementById(`${productId}-button`);
  button.setAttribute("disabled", "disabled");

  // save to basket
  const newBasket = await addProduct(productId);

  // updateTotal
  updateTotal()

  // change button to untrack
  button.outerHTML = `
    <button
      class="add-to-cart"
      id="${productId}-button"
      onclick="untrack('${productId}')"
    >
      Untrack
    </button>
  `
};

const untrack = async (productId) => {
  // disable button
  const button = document.getElementById(`${productId}-button`);
  button.setAttribute("disabled", "disabled");

  // remove from basket
  const newBasket = await removeProduct(productId);

  // updateTotal
  updateTotal()

  // change button to track
  button.outerHTML = `
    <button
      class="add-to-cart"
      id="${productId}-button"
      onclick="track('${productId}')"
    >
      Track
    </button>
  `
};
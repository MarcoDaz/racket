// state
// isLoggedIn passed in from HomeController to ejs as user
console.log("Logged in:", isLoggedIn)

// update basket view
const updateBasket = (basket) => {
  const basketDiv = document.getElementById("my-basket");
  
  const list = basket.map(product => `
    <li>${product.name}</li>
  `).join("");

  basketDiv.innerHTML = `<ul>${list}</ul>`
}

if (isLoggedIn) {
  fetch("/basket/objects")
  .then(res => res.json())
  .then(basket => updateBasket(basket))
}

// create product: track or tracked html
createTrackHtml = async (product) => {
  // if not logged in ???
  if (!isLoggedIn) {
    const loggedOutTrackHtml = `
      <a href="/sessions/new">
        <button class="add-to-cart">
          Login to Track
        </button>
      </a>  
    `;

    return loggedOutTrackHtml;
  };

  // check if in basket
  const basket = await fetchBasketIds();
  const isTracked = basket.includes(product._id)

  let html;


  if (isTracked) {
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

const track = async (productId) => {
  // disable button
  const button = document.getElementById(`${productId}-button`);
  button.setAttribute("disabled", "disabled");

  // save to basket
  const newBasket = await addProduct(productId);

  // update basket view
  updateBasket(newBasket)

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

  // update basket & view
  updateBasket(newBasket);

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
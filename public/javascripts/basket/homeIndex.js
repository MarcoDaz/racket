// state
let isLoggedIn;
fetch("/users/loginstatus")
.then(res => res.json())
.then(res => isLoggedIn = res);

let myBasket;
if (isLoggedIn) {
  fetchBasketObjects().then((basket) => {
    myBasket = basket;
  })
}


// fetch basket & update view
const updateObjectView = async () => {
  const basket = await fetchBasketObjects();
  const basketDiv = document.getElementById("my-basket");
  basketDiv.innerHTML = basket;

  // update myBasket State
  myBasket = basket
}


// create product: track or tracked html
createTrackHtml = (product) => {
  // if no basket ???

  // check if in basket
  let isTracked;
  if (myBasket) {
    isTracked = myBasket
    .map(productObj => productObj._id)
    .includes(product._id);
    console.log(isTracked)
  } else {
    isTracked = false;
  }

  let html;

  if (isTracked) {
    html = `
      <button
      class="add-to-cart"
      id="${product._id}-button"
      onclick="untrack(${product._id})"
      >
      Untrack
      </button>
    `
  } else {
    html = `
      <button
        class="add-to-cart"
        id="${product._id}-button"
        onclick="track(${product._id})"
      >
        Track
      </button>
    `
  }
  console.log(html)
  return html;
}
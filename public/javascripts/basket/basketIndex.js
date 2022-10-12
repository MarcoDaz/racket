const basketDiv = document.getElementById("my-basket");

// display basket
fetchBasket().then((basket) => {
  basketDiv.innerHTML = basket;
})
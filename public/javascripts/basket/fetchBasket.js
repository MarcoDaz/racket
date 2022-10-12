const fetchBasketIds = async () => {
  const basket = await fetch("/basket/ids").then(res => (
    res.json()
  ));

  return basket;
}

const fetchBasketObjects = async () => {
  const basket = await fetch("/basket/objects").then(res => (
    res.json()
  ));;

  return basket
}

const addProduct = async (productId) => {
  const basket = await fetch("/basket/add", {
    method: "POST",
    body: JSON.stringify({
      productId: productId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json());

  return basket;
}

const removeProduct = async (productId) => {
  const basket = await fetch("/basket/remove", {
    method: "POST",
    body: JSON.stringify({
      productId: productId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json());

  return basket;
}
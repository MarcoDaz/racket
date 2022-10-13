const sortProducts = (sortBy, clickedButton) => {
  let products = searchResults;
  
  const sortButtons = document.getElementsByClassName("sortButton");
  for (let i = 0; i < sortButtons.length; i++) {
    sortButtons[i].removeAttribute("disabled")  
  }
  clickedButton.setAttribute("disabled", "disabled");

  //sortBy = "a-z" (products = sorted a-z)
  if (sortBy === "a-z") {
    // [ product1, product2 ]
    products.sort((product1, product2) => {
      const name1 = product1.name.toLowerCase();
      const name2 = product2.name.toLowerCase();
      
      if (name1 < name2) {
        return -1;
      }
      if (name1 > name2) {
        return 1;
      }
    
      // names must be equal
      return 0;
    })
  }

  //sortBy = "z-a" (products = sorted z-a)
  if (sortBy === "z-a") {
    // [ product1, product2 ]
    products.sort((product1, product2) => {
      const name1 = product1.name.toLowerCase();
      const name2 = product2.name.toLowerCase();
      
      if (name1 < name2) {
        return -1;
      }
      if (name1 > name2) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });

    products = products.reverse();
  };

  //sortBy = "low-high"
  if (sortBy === "low-high") {
    products.sort((product1, product2) => {
      const price1 = product1.prices.at(-1).price;
      const price2 = product2.prices.at(-1).price;
      return price1 - price2 ;
    })
  }

  //sortBy = "high-low"
  if (sortBy === "high-low") {
    products.sort((product1, product2) => {
      const price1 = product1.prices.at(-1).price;
      const price2 = product2.prices.at(-1).price;
      return price2 - price1;
    })
  }

  createCharts(products, "products");
}
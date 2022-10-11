const fetchTescoUrls = async (searchTerm, page = 1) => {
  const response = await fetch(`/admin/tescoUrls?searchTerm=${searchTerm}&page=${page}`);
  const tescoUrls = await response.json();

  return tescoUrls;
};

const fetchTescoObj = async (tescoUrl) => {
  const response = await fetch(`/admin/tescoObj?tescoUrl=${tescoUrl}`);
  const tescoObj = await response.json();

  return tescoObj;
}

const fetchTescoObjects = async (urlArr) => {
  const tescoObjects = await Promise.all(
    urlArr.map(async (tescoUrl) => {
      const tescoObj = await fetchTescoObj(tescoUrl);
      return tescoObj;
    })
  );

  return tescoObjects;
}

// State
const products = {};
let search = []

// onsubmit fetchTesco(event)
const fetchTesco = async (event) => {
  event.preventDefault();
  const searchTerm = event.target.searchTerm.value;
  
  const tescoUrls = await fetchTescoUrls(searchTerm);
  console.log("Found", tescoUrls.length)
  resultsDiv = document.getElementById("tesco-results");

  // if no results
  if (!tescoUrls) {
    resultsDiv.innerHTML = "<h4>No results found</h4>"
    return;
  }

  // else
  search = tescoUrls;
  const first5 = await fetchTescoObjects(search.splice(0, 5));

  resultsDiv.innerHTML = first5.map(product => `
    <div>
      <img src="${product.images[0]}" alt="${product.name} image">
      <h5>${product.name}</h5>
      <h6>Price: <strong>£ ${product.price.value}</strong></h6>
      <h6>${product.description}</h6>
    </div>
  `.trim()).join("")

  // save to state for reference
  first5.forEach((product) => {
    products[product.tesco_id] = product;
  })
}
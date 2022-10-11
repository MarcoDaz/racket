const fetchTescoUrls = async (searchTerm, page = 1) => {
  const response = await fetch(`/admin/tescoUrls?searchTerm=${searchTerm}&page=${page}`);
  const tescoUrls = await response.json();

  return tescoUrls;
}

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
  
  console.log(tescoObjects)
  return tescoObjects;
}

// State
const tescoProducts = {};
let tescoSearch = []

// onsubmit fetchTesco(event)
const fetchTesco = async (event) => {
  event.preventDefault();
  const searchTerm = event.target.searchTerm.value;
  
  const tescoUrls = await fetchTescoUrls(searchTerm);
  console.log("Found", tescoUrls.length)
  resultsDiv = document.getElementById("tesco-container");

  // if no results
  if (!tescoUrls) {
    resultsDiv.innerHTML = "<h4>No results found</h4>"
    return;
  }

  // else
  tescoSearch = tescoUrls;
  const first5 = await fetchTescoObjects(tescoSearch.splice(0, 5));

  const createTescoHtml = async (products) => {
    const tescoHtml = await Promise.all(products.map(async (product) => {
      let html = `
        <div>
        <img src="${product.images[0]}" alt="${product.name} image">
        <h5>${product.name}</h5>
        <h6>Price: <strong>£ ${product.price.value}</strong></h6>
        <h6>${product.description}</h6>
      `.trim();

      const isTracked = await fetch(`/admin/tracked?tescoId=${product.tescoId}`).then(res => res.json());
      
      if (!isTracked) {
        console.log("HELLLO")
        html += `<button onclick="track(event, ${product.tescoId})">Track</button>`
      } else {
        console.log(isTracked)
        html += "<p><em>Tracked!</em></p>"
      }
      
      return html + "</div>";
    }));

    return tescoHtml;
  }

  // tesco search results
  const isTrackedHtmlArr = await createTescoHtml(first5);
  const productsHtml =  isTrackedHtmlArr.join("");
  
  const loadMoreHtml = `
    </br>
    <button onclick="loadMoreTesco(event)" id="loadMoreTesco">
      Load More Products..
    </button>
  `.trim();

  resultsDiv.innerHTML = productsHtml + loadMoreHtml;

  // save to state for reference
  first5.forEach((product) => {
    tescoProducts[product.tescoId] = product;
  })
}

const loadMoreTesco = async (event) => {
  
}

const track = async (event, tescoId) => {
  event.target.outerHTML = "<p><em>Tracked!</em></p>";

  const tescoObj = tescoProducts[tescoId];
  console.log(tescoObj)

  const options = {
    method: "POST",
    body: JSON.stringify({
      tescoObj: tescoObj
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }

  fetch("/admin/track", options).then(() => {
    console.log("sent tescoId:", tescoId);
  });
}
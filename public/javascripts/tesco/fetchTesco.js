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
    
  return tescoObjects;
}
  
// State
const tescoProducts = {};
let tescoPage = 1;
let tescoSearch = []
  
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
      html += `<button onclick="track(event, ${product.tescoId})">Track</button>`
    } else {
      html += "<p><em>Tracked!</em></p>"
    }
    
    return html + "</div>";
  }));

  return tescoHtml;
}

// onsubmit fetchTesco(event)
const fetchTesco = async (event) => {
  event.preventDefault();
  const searchTerm = event.target.searchTerm.value.trim();
  if (searchTerm.length < 1) return;

  tescoPage = 1;
  tescoSearchTerm = searchTerm;
  
  const tescoUrls = await fetchTescoUrls(searchTerm);
  resultsDiv = document.getElementById("tesco-container");

  // if no results
  if (!tescoUrls) {
    resultsDiv.innerHTML = "<h4>No results found</h4>"
    return;
  }

  // else
  tescoSearch = tescoUrls;
  const first10 = await fetchTescoObjects(tescoSearch.splice(0, 10));


  // tesco search results
  const isTrackedHtmlArr = await createTescoHtml(first10);
  const productsHtml =  `<div id="tesco-results">${isTrackedHtmlArr.join("")}</div>`
  
  const loadMoreHtml = `
    </br>
    <button onclick="loadMoreTesco(event)" id="loadMoreTesco">
      Load More Products..
    </button>
  `.trim();

  resultsDiv.innerHTML = productsHtml + loadMoreHtml;

  // save to state for reference
  first10.forEach((product) => {
    tescoProducts[product.tescoId] = product;
  })
}

const loadMoreTesco = async (event) => {
  // get next 10 urls => products
  const next10 = await fetchTescoObjects(tescoSearch.splice(0, 10));
  const tescoHtml = await createTescoHtml(next10);
  const resultsDiv = document.getElementById("tesco-results");
  resultsDiv.innerHTML += tescoHtml;

  // save to tescoProducts state
  next10.forEach((product) => {
    tescoProducts[product.tescoId] = product;
  })

  if (tescoSearch.length < 10) {
    tescoPage++
    const newUrls = await fetchTescoUrls(tescoSearchTerm, tescoPage);
    tescoSearch = tescoSearch.concat(newUrls);
  }
  
  // if tescoSearch < 1 change button to 'no more'
  if (tescoSearch < 1) {
    const loadMoreTescoButton = document.getElementById("loadMoreTesco");
    loadMoreTescoButton.outerHTML = `<strong>No more products</strong>`;
  }
}

const track = async (event, tescoId) => {
  event.target.outerHTML = "<p><em>Tracked!</em></p>";

  const tescoObj = tescoProducts[tescoId];

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
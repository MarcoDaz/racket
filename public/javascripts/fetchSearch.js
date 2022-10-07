const fetchSearch = async (event) => {
  // prevent page from reloading
  event.preventDefault();
  const searchTerm = event.target.searchTerm.value.trim();

  // prevent empty searches
  if (!searchTerm) return;

  const apiUrl = event.target.action;
  const response = await fetch(`${apiUrl}?searchTerm=${searchTerm}`);
  const results = await response.json();

  createCharts(results, "products");
}
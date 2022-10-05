// grab sub-string inside relevant script tag
const getScriptContent = (htmlString) => {
  // 1) begins with <script type="application/ld+json">
  let index_1 = htmlString.indexOf('<script type="application/ld+json">')
  index_1 += 35;

  // 2) ends with </script>
  let index_2 = htmlString.slice(index_1).indexOf('</script>');
  index_2 += index_1;

  // 3) get the slice
  const slice = htmlString.slice(index_1, index_2)

  // return as object
  const object = JSON.parse(slice)[2];
  return object;
}

module.exports = getScriptContent;
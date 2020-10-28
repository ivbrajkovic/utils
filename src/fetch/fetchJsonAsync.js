/**
 * Fetch JOSN response async
 * @param {string} url rul
 * @param {object} options fetch options
 */
const fetchJsonAsync = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(response.status);

  // Check if response is JOSN
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json"))
    throw new Error("Oops, we haven't got JSON!");

  // Get JOSN from response
  const json = await response.json();
  return json;
};

export default fetchJsonAsync;

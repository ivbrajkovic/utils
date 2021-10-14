/* eslint-disable @typescript-eslint/ban-types */

/**
 * Fetch JSON response async
 * @param {RequestInfo} url rul
 * @param {RequestInit} options fetch options
 */
async function fetchJsonAsync(
  url: RequestInfo,
  options: RequestInit = {}
): Promise<string> {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(response.status.toString());

  // Check if response is JSON
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json'))
    throw new Error("Oops, we haven't got JSON!");

  // Get JSON from response
  const json = await response.json();
  return json;
}

export default fetchJsonAsync;

/**
 * Fetch text response async
 * @param {RequestInfo} url rul
 * @param {RequestInit} options fetch options
 */
async function fetchTextAsync(
  url: RequestInfo,
  options: RequestInit = {}
): Promise<string> {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(response.status.toString());

  // Return response text
  return await response.text();
}

export default fetchTextAsync;

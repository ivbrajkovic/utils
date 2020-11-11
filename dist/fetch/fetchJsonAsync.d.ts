/**
 * Fetch JOSN response async
 * @param {RequestInfo} url rul
 * @param {RequestInit} options fetch options
 */
declare function fetchJsonAsync(url: RequestInfo, options?: RequestInit): Promise<Object>;
export default fetchJsonAsync;

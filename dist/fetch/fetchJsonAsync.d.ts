/**
 * Fetch JOSN response async
 * @param {string} url rul
 * @param {object} options fetch options
 */
declare const fetchJsonAsync: (url: string, options?: RequestInit) => Promise<any>;
export default fetchJsonAsync;

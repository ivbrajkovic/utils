/**
 * Fetch text response async
 * @param {RequestInfo} url rul
 * @param {RequestInit} options fetch options
 */
declare function fetchTextAsync(url: RequestInfo, options?: RequestInit): Promise<string>;
export default fetchTextAsync;

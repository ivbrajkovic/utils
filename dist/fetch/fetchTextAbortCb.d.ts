/**
 * Fetch JSON response with abort feature
 * @param {string} url url
 * @param {object} options fetch options
 * @param {fn} cb callback function
 */
declare function fetchJsonAbortCb(url: RequestInfo, options: RequestInit | undefined, cb: (err: Error | null, data?: Object) => void): () => void;
export default fetchJsonAbortCb;

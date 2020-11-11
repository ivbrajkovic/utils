declare type Callback = (err: Error | null, data?: Object) => void;
/**
 * Fetch JSON response with abort feature
 * @param {string} url url
 * @param {object} options fetch options
 * @param {fn} cb callback function
 */
declare function fetchJsonAbortCb(url: string, options: RequestInit | Callback, cb: Callback | null): () => void;
export default fetchJsonAbortCb;

/**
 * Fetch JSON response with abort feature
 * @param {string} url url
 * @param {object} options fetch options
 * @param {fn} cb callback function
 */
declare const fetchJsonAbortCb: (url: string, options: RequestInit | undefined, cb: (err: string | null, data?: any) => void) => (() => void);
export default fetchJsonAbortCb;

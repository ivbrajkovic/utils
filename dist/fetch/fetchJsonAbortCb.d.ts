/**
 * Fetch JSON response with abort feature
 * @param {string} url url
 * @param {object} options fetch options
 * @param {fn} cb callback function
 */
export declare function fetchJsonAbortCb(url: string, options: RequestInit | undefined, cb: (err: Error | null, data?: any) => void): () => void;

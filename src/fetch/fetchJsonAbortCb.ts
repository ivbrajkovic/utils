/* eslint-disable @typescript-eslint/ban-types */

import fetchJsonAsync from "./fetchJsonAsync";

/**
 * Fetch JSON response with abort feature
 * @param {string} url url
 * @param {object} options fetch options
 * @param {fn} cb callback function
 */
function fetchJsonAbortCb(
  url: string,
  options: RequestInit = {},
  cb: (err: Error | null, data?: Object) => void
): () => void {
  const abortController = new AbortController();
  const signal = abortController.signal;

  fetchJsonAsync(url, { ...options, signal })
    .then((data) => {
      cb && cb(null, data);
    })
    .catch((err) => {
      cb && cb(err);
    });

  return () => abortController.abort();
}

export default fetchJsonAbortCb;

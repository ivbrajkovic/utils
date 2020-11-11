/* eslint-disable @typescript-eslint/ban-types */

import fetchTextAsync from "./fetchTextAsync";

type Callback = (err: Error | null, data?: Object) => void;

/**
 * Fetch JSON response with abort feature
 * @param {string} url url
 * @param {object} options fetch options
 * @param {fn} cb callback function
 */
function fetchJsonAbortCb(
  url: RequestInfo,
  options: RequestInit | Callback,
  cb: Callback | null
): () => void {
  const abortController = new AbortController();
  const signal = abortController.signal;

  // eslint-disable-next-line prefer-rest-params
  if (typeof arguments[1] === "function") cb = arguments[1];

  fetchTextAsync(url, { ...options, signal })
    .then((data) => {
      cb && cb(null, data);
    })
    .catch((err) => {
      cb && cb(err);
    });

  return () => abortController.abort();
}

export default fetchJsonAbortCb;

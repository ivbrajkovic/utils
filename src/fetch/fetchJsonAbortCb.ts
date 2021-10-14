/* eslint-disable @typescript-eslint/ban-types */

import fetchJsonAsync from './fetchJsonAsync';

type Callback = (err: Error | null, data?: string) => void;

/**
 * Fetch JSON response with abort feature
 * @param {string} url url
 * @param {object} options fetch options
 * @param {fn} cb callback function
 */
function fetchJsonAbortCb(
  url: string,
  options: RequestInit | Callback,
  cb: Callback | null
): () => void {
  const abortController = new AbortController();
  const signal = abortController.signal;

  // eslint-disable-next-line prefer-rest-params
  if (typeof arguments[1] === 'function') cb = arguments[1];

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

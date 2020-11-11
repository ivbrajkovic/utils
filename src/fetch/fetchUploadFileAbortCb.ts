/* eslint-disable @typescript-eslint/ban-types */

import fetchJsonAsync from "./fetchJsonAsync";

/**
 * Fetch POST to upload file with abort feature
 * @param {RequestInfo} url url
 * @param {string} file path to file
 * @param {Function} cb callback function
 */
function fetchUploadFileAbortCb(
  url: RequestInfo,
  file: string,
  cb: (err: Error | null, data?: Object) => void
): () => void {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const body = new FormData();
  body.append("file", file);

  fetchJsonAsync(url, { method: "POST", body, signal })
    .then((data) => {
      cb && cb(null, data);
    })
    .catch((err) => {
      cb && cb(err);
    });

  return () => abortController.abort();
}

export default fetchUploadFileAbortCb;

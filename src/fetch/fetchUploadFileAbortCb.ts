/* eslint-disable  @typescript-eslint/no-explicit-any */

import { fetchJsonAsync } from "./fetchJsonAsync";

/**
 * Fetch POST to upload file with abort feature
 * @param {string} url url
 * @param {string} file path to file
 * @param {fn} cb callback function
 */
export function fetchUploadFileAbortCb(
  url: string,
  file: string,
  cb: (err: Error | null, data?: any) => void
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

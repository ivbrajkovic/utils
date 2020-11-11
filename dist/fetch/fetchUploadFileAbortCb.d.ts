/**
 * Fetch POST to upload file with abort feature
 * @param {RequestInfo} url url
 * @param {string} file path to file
 * @param {Function} cb callback function
 */
declare function fetchUploadFileAbortCb(url: RequestInfo, file: string, cb: (err: Error | null, data?: Object) => void): () => void;
export default fetchUploadFileAbortCb;

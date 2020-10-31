/**
 * Fetch POST to upload file with abort feature
 * @param {string} url url
 * @param {string} file path to file
 * @param {fn} cb callback function
 */
export declare function fetchUploadFileAbortCb(url: string, file: string, cb: (err: Error | null, data?: any) => void): () => void;

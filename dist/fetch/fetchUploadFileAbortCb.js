"use strict";
/* eslint-disable  @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUploadFileAbortCb = void 0;
var fetchJsonAsync_1 = require("./fetchJsonAsync");
/**
 * Fetch POST to upload file with abort feature
 * @param {string} url url
 * @param {string} file path to file
 * @param {fn} cb callback function
 */
function fetchUploadFileAbortCb(url, file, cb) {
    var abortController = new AbortController();
    var signal = abortController.signal;
    var body = new FormData();
    body.append("file", file);
    fetchJsonAsync_1.fetchJsonAsync(url, { method: "POST", body: body, signal: signal })
        .then(function (data) {
        cb && cb(null, data);
    })
        .catch(function (err) {
        cb && cb(err);
    });
    return function () { return abortController.abort(); };
}
exports.fetchUploadFileAbortCb = fetchUploadFileAbortCb;

"use strict";
/* eslint-disable  @typescript-eslint/no-explicit-any */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchJsonAbortCb = void 0;
var fetchJsonAsync_1 = require("./fetchJsonAsync");
/**
 * Fetch JSON response with abort feature
 * @param {string} url url
 * @param {object} options fetch options
 * @param {fn} cb callback function
 */
function fetchJsonAbortCb(url, options, cb) {
    if (options === void 0) { options = {}; }
    var abortController = new AbortController();
    var signal = abortController.signal;
    fetchJsonAsync_1.fetchJsonAsync(url, __assign(__assign({}, options), { signal: signal }))
        .then(function (data) {
        cb && cb(null, data);
    })
        .catch(function (err) {
        cb && cb(err);
    });
    return function () { return abortController.abort(); };
}
exports.fetchJsonAbortCb = fetchJsonAbortCb;

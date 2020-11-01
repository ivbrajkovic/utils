"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
/**
 * Debounce function
 * @param {object} func function to call
 * @param {number} delay delay timeout
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function debounce(func, delay) {
    var timer;
    // Create debounced version of func
    var debounced = function () {
        /*eslint-disable */
        // @ts-ignore
        var context = this;
        var args = arguments;
        /*eslint-enable */
        clearTimeout(timer);
        timer = setTimeout(function () { return func.apply(context, args); }, delay);
    };
    // Add clear option
    debounced.clear = function () {
        clearTimeout(timer);
        timer = 0;
    };
    return debounced;
}
exports.debounce = debounce;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixToTwo = exports.fixToOne = exports.isPowerOf2 = exports.degToRad = exports.radToDeg = exports.randomIntFast = exports.fetchSimpleJsonAsync = exports.fetchSimpleTextAsync = exports.deleteAllChild = exports.isObjectEmpty = void 0;
/**
 * Check if an objet is empty
 *
 * @param {object} obj  - object to check
 * @returns {boolean}   - indicate if object is empty
 */
exports.isObjectEmpty = function (obj) {
    if (obj === void 0) { obj = {}; }
    return !obj || Object.keys(obj).length === 0;
};
/**
 * Delete all child of HTML element
 *
 * @param {element} element  - node from who to delete childs
 */
exports.deleteAllChild = function (element) {
    while (element.firstChild)
        element.removeChild(element.firstChild);
};
/**
 * Helper for fetch text
 *
 * @param {string} url - url
 * @returns {string} - fetched text
 * @throws Error
 */
exports.fetchSimpleTextAsync = function (url, opt) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, fetch(url, opt)];
        case 1: return [4 /*yield*/, (_a.sent()).text()];
        case 2: return [2 /*return*/, _a.sent()];
    }
}); }); };
/**
 * Helper for fetch JSON object
 *
 * @param {string} url - url
 * @returns {any} - fetched JSON object
 * @throws Error
 */
exports.fetchSimpleJsonAsync = function (url, opt
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, fetch(url, opt)];
        case 1: return [4 /*yield*/, (_a.sent()).json()];
        case 2: return [2 /*return*/, _a.sent()];
    }
}); }); };
/**
 * Generate random integer betweean min and max (fast)
 * @param {number} min min
 * @param {number} max max
 * @param {boolean} included min and max inclusive
 */
function randomIntFast(min, max, included) {
    return ~~(Math.random() * (max - min + (included ? 1 : 0))) + min;
}
exports.randomIntFast = randomIntFast;
/**
 * Convert radian to degree
 * @param radian radian
 */
function radToDeg(radian) {
    return (radian * 180) / Math.PI;
}
exports.radToDeg = radToDeg;
/**
 * Convert degree to radian
 * @param degree degree
 */
function degToRad(degree) {
    return (degree * Math.PI) / 180;
}
exports.degToRad = degToRad;
/**
 * Check if number is power of two (bitwise check)
 * @param value number to check
 */
function isPowerOf2(value) {
    return value !== 0 && (value & (value - 1)) == 0;
}
exports.isPowerOf2 = isPowerOf2;
/**
 * Round number to one decimal (fast)
 * @param num
 */
function fixToOne(num) {
    return Math.round(num * 10) / 10;
}
exports.fixToOne = fixToOne;
/**
 * Round number to two decimals (fast)
 * @param num
 */
function fixToTwo(num) {
    return Math.round(num * 100) / 100;
}
exports.fixToTwo = fixToTwo;

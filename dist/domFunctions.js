"use strict";
/**
 * DOM utilty functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = exports.getElementEvents = void 0;
/**
 * ! Debugging on browser console only
 * Get all html elements registered events
 *
 * @param {string} - Query sellector
 * @returns - Returns array of events
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getElementEvents(selector) {
    var items = Array.prototype.slice
        .call(document.querySelectorAll(selector))
        .map(function (element) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var listeners = getEventListeners(element);
        return {
            element: element,
            listeners: Object.keys(listeners).map(function (k) {
                return { event: k, listeners: listeners[k] };
            }),
        };
    })
        .filter(function (item) {
        return item.listeners.length;
    });
    return items;
}
exports.getElementEvents = getElementEvents;
/**
 * Create a DOM element
 * @param {string} element Element to create
 * @param {Array} classes Classes to apply
 * @param {string} innerHtml HTML text to append
 * @param {string} text Text to append
 * @param {string} data Data attribute
 */
function createElement(element, classes, innerHtml, text, data) {
    var _a;
    var el = document.createElement(element);
    // classes && classes.forEach((c) => c && el.classList.add(c));
    classes && classes.length >= 0 && (_a = el.classList).add.apply(_a, classes);
    innerHtml && (el.innerHTML = innerHtml);
    text && el.appendChild(document.createTextNode(text));
    data && data.length >= 0 && el.setAttribute("data-index", data);
    return el;
}
exports.createElement = createElement;

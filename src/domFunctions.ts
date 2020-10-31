/**
 * DOM utilty functions
 */

/**
 * Interface returned from getElementEvents function call
 */
interface ElementEventObject {
  element: Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listeners: Array<any>;
}

/**
 * ! Debugging on browser console only
 * Get all html elements registered events
 *
 * @param {string} - Query sellector
 * @returns - Returns array of events
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getElementEvents(selector: string): Array<ElementEventObject> {
  const items = Array.prototype.slice
    .call(document.querySelectorAll(selector))
    .map(function (element: Element) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const listeners = getEventListeners(element);
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

/**
 * Create a DOM element
 * @param {string} element Element to create
 * @param {Array} classes Classes to apply
 * @param {string} innerHtml HTML text to append
 * @param {string} text Text to append
 * @param {string} data Data attribute
 */
export function createElement(
  element: string,
  classes?: Array<string>,
  innerHtml?: string,
  text?: string,
  data?: string
): HTMLElement {
  const el = document.createElement(element);
  // classes && classes.forEach((c) => c && el.classList.add(c));
  classes && classes.length >= 0 && el.classList.add(...classes);
  innerHtml && (el.innerHTML = innerHtml);
  text && el.appendChild(document.createTextNode(text));
  data && data.length >= 0 && el.setAttribute("data-index", data);
  return el;
}

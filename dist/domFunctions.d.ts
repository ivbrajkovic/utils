/**
 * DOM utilty functions
 */
/**
 * Interface returned from getElementEvents function call
 */
interface ElementEventObject {
    element: Element;
    listeners: Array<any>;
}
/**
 * ! Debugging on browser console only
 * Get HTML element registered events
 *
 * @param {string} - Query sellector
 * @returns - Returns array of events
 */
export declare function getElementEvents(selector: string): Array<ElementEventObject>;
/**
 * Create a DOM element
 * @param {string} element Element to create
 * @param {Array} classes Classes to apply
 * @param {string} innerHtml HTML text to append
 * @param {string} text Text to append
 * @param {string} data Data attribute
 */
export declare function createElement(element: string, classes?: Array<string>, innerHtml?: string, text?: string, data?: string): HTMLElement;
export {};

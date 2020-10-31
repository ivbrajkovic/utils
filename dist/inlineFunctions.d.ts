/**
 * Check if an objet is empty
 *
 * @param {object} obj  - object to check
 * @returns {boolean}   - indicate if object is empty
 */
export declare const isObjectEmpty: (obj?: {}) => boolean;
/**
 * Delete all child of node
 *
 * @param {element} node  - node from who to delete childs
 */
export declare const deleteAll: (node: HTMLElement) => void;
/**
 * Helper for fetch text
 *
 * @param {string} url - url
 * @returns {string} - fetched text
 */
export declare const fetchSimpleTextAsync: (url: string, opt?: RequestInit | undefined) => Promise<string>;
/**
 * Helper for fetch JSON object
 *
 * @param {string} url - url
 * @returns {any} - fetched JSON object
 */
export declare const fetchSimpleJsonAsync: (url: string, opt?: RequestInit | undefined) => Promise<any>;

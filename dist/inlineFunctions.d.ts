/**
 * Check if an objet is empty
 *
 * @param {object} obj  - object to check
 * @returns {boolean}   - indicate if object is empty
 */
export declare const isObjectEmpty: (obj?: {}) => boolean;
/**
 * Delete all child of HTML element
 *
 * @param {element} element  - node from who to delete childs
 */
export declare const deleteAllChild: (element: HTMLElement) => void;
/**
 * Helper for fetch text
 *
 * @param {string} url - url
 * @returns {string} - fetched text
 * @throws Error
 */
export declare const fetchSimpleTextAsync: (url: string, opt?: RequestInit | undefined) => Promise<string>;
/**
 * Helper for fetch JSON object
 *
 * @param {string} url - url
 * @returns {any} - fetched JSON object
 * @throws Error
 */
export declare const fetchSimpleJsonAsync: (url: string, opt?: RequestInit | undefined) => Promise<any>;
/**
 * Generate random integer betweean min and max (fast)
 * @param {number} min min
 * @param {number} max max
 * @param {boolean} included min and max inclusive
 */
export declare function randomIntFast(min: number, max: number, included: false): number;
/**
 * Convert radian to degree
 * @param radian radian
 */
export declare function radToDeg(radian: number): number;
/**
 * Convert degree to radian
 * @param degree degree
 */
export declare function degToRad(degree: number): number;
/**
 * Check if number is power of two (bitwise check)
 * @param value number to check
 */
export declare function isPowerOf2(value: number): boolean;
/**
 * Round number to one decimal (fast)
 * @param num
 */
export declare function fixToOne(num: number): number;
/**
 * Round number to two decimals (fast)
 * @param num
 */
export declare function fixToTwo(num: number): number;
/**
 * Log formated JSON to console
 * @param value Value to print
 * @param spaces Spaces to indent
 */
export declare function logJson(value: Object, spaces?: number): void;
/**
 * Remove leading 0's from string
 * @param value String
 */
export declare function trimLeadingZeros(value: string): string;
/**
 * Pritty print object to console
 * @param object Object to log
 */
export declare function logObject(object: Object): void;

/* eslint-disable @typescript-eslint/ban-types */
/**
 * Check if an objet is empty
 *
 * @param {object} obj  - object to check
 * @returns {boolean}   - indicate if object is empty
 */
export const isObjectEmpty = (obj = {}): boolean =>
  !obj || Object.keys(obj).length === 0;

/**
 * Delete all child of HTML element
 *
 * @param {element} element  - node from who to delete childs
 */
export const deleteAllChild = (element: HTMLElement): void => {
  while (element.firstChild) element.removeChild(element.firstChild);
};

/**
 * Helper for fetch text
 *
 * @param {string} url - url
 * @returns {string} - fetched text
 * @throws Error
 */
export const fetchSimpleTextAsync = async (
  url: string,
  opt?: RequestInit
): Promise<string> => await (await fetch(url, opt)).text();

/**
 * Helper for fetch JSON object
 *
 * @param {string} url - url
 * @returns {any} - fetched JSON object
 * @throws Error
 */
export const fetchSimpleJsonAsync = async (
  url: string,
  opt?: RequestInit
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => await (await fetch(url, opt)).json();

/**
 * Generate random integer betweean min and max (fast)
 * @param {number} min min
 * @param {number} max max
 * @param {boolean} included min and max inclusive
 */
export function randomIntFast(
  min: number,
  max: number,
  included: false
): number {
  return ~~(Math.random() * (max - min + (included ? 1 : 0))) + min;
}

/**
 * Convert radian to degree
 * @param radian radian
 */
export function radToDeg(radian: number): number {
  return (radian * 180) / Math.PI;
}

/**
 * Convert degree to radian
 * @param degree degree
 */
export function degToRad(degree: number): number {
  return (degree * Math.PI) / 180;
}

/**
 * Check if number is power of two (bitwise check)
 * @param value number to check
 */
export function isPowerOf2(value: number): boolean {
  return value !== 0 && (value & (value - 1)) == 0;
}

/**
 * Round number to one decimal (fast)
 * @param num
 */
export function fixToOne(num: number): number {
  return Math.round(num * 10) / 10;
}

/**
 * Round number to two decimals (fast)
 * @param num
 */
export function fixToTwo(num: number): number {
  return Math.round(num * 100) / 100;
}

/**
 * Log formated JSON to console
 * @param value Value to print
 * @param spaces Spaces to indent
 */
export function logJson(value: Object, spaces = 2): void {
  console.log(JSON.stringify(value, null, spaces));
}

/**
 * Remove leading 0's from string
 * @param value String
 */
export function trimLeadingZeros(value: string): string {
  return value.replace(/^0+/, "");
}

/**
 * Pretty print object to console
 * @param object Object to log
 */
export function logObject(object: Object): void {
  console.log(JSON.stringify(object, null, 2));
}

/**
 * Absolute value of a 32 bit number (like Math.abs but faster)
 * @param value Number to get absolute value
 */
export function absValue(n: number): number {
  return n < 0 ? -n : n;
}

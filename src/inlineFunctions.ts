/**
 * Check if an objet is empty
 *
 * @param {object} obj  - object to check
 * @returns {boolean}   - indicate if object is empty
 */
export const isObjectEmpty = (obj = {}): boolean =>
  !obj || Object.keys(obj).length === 0;

/**
 * Delete all child of node
 *
 * @param {element} node  - node from who to delete childs
 */
export const deleteAll = (node: HTMLElement): void => {
  while (node.firstChild) node.removeChild(node.firstChild);
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

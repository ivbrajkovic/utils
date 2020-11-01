/**
 * Debounce function
 * @param {object} func function to call
 * @param {number} delay delay timeout
 */
export declare function debounce(func: Function, delay: number): () => void;
/**
 * Generate random number betweean min and max
 * @param {number} min min
 * @param {number} max max
 * @param {boolean} included min and max inclusive
 * @param {number} fixed decimal places
 */
export declare function random(min: number, max: number, included: false, fixed: 0): number;

/**
 * Debounce function
 * @param {object} func function to call
 * @param {number} delay delay timeout
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce(func: Function, delay: number): () => void {
  let timer: number;

  // Create debounced version of func
  const debounced = function () {
    /*eslint-disable */
    // @ts-ignore
    const context: any = this;
    const args = arguments;
    /*eslint-enable */
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(context, args), delay);
  };

  // Add clear option
  debounced.clear = function () {
    clearTimeout(timer);
    timer = 0;
  };

  return debounced;
}

/**
 * Generate random number betweean min and max
 * @param {number} min min
 * @param {number} max max
 * @param {boolean} included min and max inclusive
 * @param {number} fixed decimal places
 */
export function random(
  min: number,
  max: number,
  included: false,
  fixed: 0
): number {
  fixed < 0 && (fixed = 0);
  const offset: number = included ? 1 : 0;

  if (!fixed) return Math.floor(Math.random() * (max - min + offset)) + min;

  const n = Math.random() * (max - min) + min;
  return +n.toFixed(fixed);
}

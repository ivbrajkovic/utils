export type Procedure = (...args: any[]) => any;

export interface DebouncedFunction<F extends Procedure> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): Promise<ReturnType<F>>;
  clear: () => void;
}

/**
 * Debounce function
 * @param {object} func function to call
 * @param {number} delay delay timeout
 */
export function debounce<F extends Procedure>(
  func: F,
  delay: number
): () => void {
  let timer: null | ReturnType<typeof setTimeout> = null;

  // Create debounced version of func
  const debounced = function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    clearTimeout(timer as ReturnType<typeof setTimeout>);
    timer = setTimeout(() => func.apply(context, args), delay);
  };

  // Add clear option
  debounced.clear = function () {
    clearTimeout(timer as ReturnType<typeof setTimeout>);
    timer = null;
  };

  return debounced;
}

/**
 * Generate random number between min and max
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

/**
 * Truncate string if exceed max length
 * @param str String to truncate
 * @param length Max length of the string
 * @param ending Optional ending of truncated string
 */
export function truncStr(str = '', length = 0, ending = '...'): string {
  if (
    typeof str !== 'string' ||
    !str.length ||
    typeof length !== 'number' ||
    typeof ending !== 'string'
  )
    return '';
  if (length < 1) return str;
  return str.length > length ? str.substr(0, length) + ending : str;
}

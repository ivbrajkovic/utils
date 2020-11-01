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

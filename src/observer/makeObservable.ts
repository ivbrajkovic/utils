type Select = string | ((key: string, value: unknown) => void);
type CallbackOneParam = ((value: unknown) => void) | undefined;

declare function observe(
  select: string,
  callback: (value: unknown) => void
): void;
declare function observe(callback: (key: string, value: unknown) => void): void;

interface IObject {
  [key: symbol]: Array<[select: Select, callback: CallbackOneParam]>;
  [key: string]: unknown;
}

type IObserved = IObject & {
  observe: typeof observe;
  unobserveAll: () => void;
  getObserversCount: () => number;
};

const makeObservableSelect = (observed: IObject): IObserved => {
  // Initialize handlers array
  const handlers = Symbol('handlers');
  observed[handlers] = [];

  observed.getObserversCount = function () {
    return observed[handlers].length;
  };

  observed.unobserveAll = function () {
    observed[handlers].length = 0;
  };

  // Add handler to array
  observed.observe = function (
    ...handler: [select: Select, callback: CallbackOneParam]
  ) {
    // TODO Add handler reference check
    this[handlers].push(handler);

    // Remove handler from the list
    return function () {
      observed[handlers] = observed[handlers].filter((h) => h !== handler);
    };
  };

  // 2. Create a proxy to handle changes
  return new Proxy(observed, {
    set(target, property, value, receiver) {
      const reflectValue = Reflect.get(target, property, receiver);
      if (value === reflectValue) return true; // Update only if different

      // Forward the operation to object
      const success = Reflect.set(target, property, value, receiver);

      if (success) {
        target[handlers].forEach((handler) => {
          if (typeof handler[0] === 'function')
            handler[0](property as string, value);
          else if (handler[0] === property) handler[1]?.(value);
        });
      }
      return success; // Throw error if false
    },
  }) as IObserved;
};

export default makeObservableSelect;

// Create a WeakMap instance
export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryCount = weakMap.get(endpoint) + 1;

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, queryCount);
}

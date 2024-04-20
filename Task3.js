/**
 * Creates a counter function that increments and returns a value starting from 0.
 *
 * @return {function} A function that increments and returns the current value of the counter.
 */
export function createCounter() {
    let i = 0;
    return () => ++i;
}

/**
 * Returns a function that executes the given function multiple times based on the specified number of repeats.
 *
 * @param {function} fun - The function to be repeated.
 * @param {number} repeats - The number of times the function should be repeated. If negative, the function will be repeated indefinitely.
 * @return {function} - A function that executes the given function multiple times.
 */
export function repeatFunction(fun, repeats) {
    return function (...args) {
        while (repeats < 0) {
            fun(args);
        }
        while (repeats > 0) {
            fun(args)
            repeats--;
        }
    }
}

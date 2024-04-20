/**
 * Returns a lazy iterator that applies the given mapping function to each element of the input array.
 *
 * @param {Array} array - The input array.
 * @param {Function} mappingFunction - The function to apply to each element of the input array.
 * @return {Object} An iterator object with a `next` method that returns an object with `value` and `done` properties.
 * @property {function} next - The function to generate the next an Object that contains `value` and `done` properties. `value` is the element to which was applied mapping function.
 */
export function lazyMap(array, mappingFunction) {
    let index = 0;
    return {
        next: function () {
            if (index >= array.length) {
                return {value: undefined, done: true};
            } else {
                const value = mappingFunction(array[index]);
                index++;
                return {value: value, done: false};
            }
        }
    };
}

/**
 * Generates the next Fibonacci number in the sequence.
 *
 * @return {Object} The generator for next fibonacci number.
 * @property {function} next - The function to generate the next Fibonacci number.
 */
export function fibonacciGenerator() {
    let [a, b] = [0, 1];
    return {
        next() {
            const toReturn = a;
            const nextNum = a + b;
            a = b;
            b = nextNum;
            return {value: toReturn, done: false};
        }
    };
}


/**
 * Calculates the factorial of a number using recursion.
 *
 * @param {number} n - The number for which to calculate the factorial
 * @return {number | null} - The factorial of the input number, or null if input is invalid
 */
function calculateFactorial(n) {
    // I used outer function in order to prevent user to touch accumulator, recursion is inside
    const calc = (n, accumulator = 1) => {
        if (n < 0 || n % 1 !== 0 || typeof n !== 'number') {
            return null;
        }
        return n === 0 || n === 1 ? accumulator : calc(n - 1, n * accumulator);
    }
    return calc(n);
}

/**
 * Calculates the power of a number.
 *
 * @param {number} x - The base number
 * @param {number} y - The exponent
 * @returns {number} - The result of x raised to the power of y
 */
export function power(x, y) {
    // I used outer function in order to prevent user to touch accumulator, recursion is inside
    const calc = (x, y, accumulator = x) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            return null;
        }
        if (y === 0) {
            return 1;
        }
        const changeY = () => y < 0 ? ++y : --y;
        return y === 1 || y === -1 ? accumulator : calc(x, changeY(), accumulator * x);
    }
    const negativeExponent = y < 0;
    return negativeExponent ? 1 / calc(x, y) : calc(x, y);
}




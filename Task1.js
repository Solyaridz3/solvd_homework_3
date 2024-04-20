/**
 * @typedef {Object} Product
 * @property {string} name - Product name
 * @property {number} price - Product price
 */

/**
 *
 * @param {Product[]} products - Products list
 * @param {Number} discount - Discount percentage
 * @return {Product[]} - Products with discounted price
 * */
export function calculateDiscountedPrice(products, discount) {
    return products.map(product => ({...product, name: product.name, price: product.price * (1 - discount / 100)}));
}

/**
 * Pure function that calculates total price of all given products
 * @param {Product[]} products - Products list
 * @return {number} - Total price
 */

export function calculateTotalPrice(products) {
    return products.reduce((accumulator, product) => accumulator + product.price, 0);
}

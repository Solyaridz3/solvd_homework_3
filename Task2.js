const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const replaceNonAlphabetic = text => text.replace(/[^a-zA-Z\s]/g, '');

const toLowerCase = text => text.toLowerCase();

const split = delimiter => text => text.split(delimiter);

const filter = predicate => arr => arr.filter(predicate);

const isFirstOccurrence = (element, index, arr) => arr.indexOf(element) === index;

const sortAlphabetic = arr => arr.sort();

const getGrades = students => students.map(({grades}) => grades);

const flatten = grades => grades.flat(Infinity);

const sum = grades => grades.reduce((total, grade) => total + grade, 0);

const length = ({length}) => length;

const getAverage = grades => sum(grades) / length(grades);

/**
 * Returns the full name by concatenating the first name and last name.
 *
 * @param {Object} person - An object containing the first name and last name.
 * @param {string} person.firstName - The first name of the person.
 * @param {string} person.lastName - The last name of the person.
 * @return {string} The full name of the person.
 */
export const getFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;


/**
 * Function that filters text for unique words and returns them as array in alphabetic order
 * @param {string} - Input text
 * @return {string[]} - Filtered words array in alphabetic order
 */
export const filterUnique = compose(sortAlphabetic, filter(isFirstOccurrence), split(' '), replaceNonAlphabetic, toLowerCase);

/**
 * Returns the average grade of all students.
 *
 * @param {Object} student - An object containing students grades
 * @param {string} name - Student name
 * @param {number[]} grades  - Student grades
 * @return {number} The average grade for all students
 */
export const getAverageGrade = compose(getAverage, flatten, getGrades);

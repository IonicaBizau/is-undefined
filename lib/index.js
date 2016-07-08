/**
 * isUndefined
 * Checks if a value is undefined or not.
 *
 * @name isUndefined
 * @function
 * @param {Anything} input The input value.
 * @returns {Boolean} `true`, if the input is `undefined`, `false` otherwise.
 */
module.exports = function isUndefined(input) {
    return typeof input === 'undefined';
};

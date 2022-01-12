/**
 * Generates a random number.
 *
 * @param {number} bound, This is used to get a random number between 0 (inclusive) and the number passed in this argument, exclusive.
 */
step.numberGenerator = function (bound) {
    return endpoint.randomNumber({bound});
};
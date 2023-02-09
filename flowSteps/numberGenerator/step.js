/**
 * Generates a random number.
 * @param {object} inputs
 * @param {inputs.number} bound, This is used to get a random number between 0 (inclusive) and the number passed in this argument, exclusive.
 */
step.numberGenerator = function (inputs) {
    return endpoint.randomNumber({bound: inputs.bound});
};
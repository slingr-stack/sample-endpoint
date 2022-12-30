/**
 * Generates a random number.
 *
 * @param {object} stepConfig.inputs {number} bound, This is used to get a random number between 0 (inclusive)
 * and the number passed in this argument, exclusive.
 * @param {object} stepConfig.context {object} context
 */
step.numberGenerator = function (stepConfig) {

    var data = endpoint.randomNumber({bound: stepConfig.inputs.bound});
    return {
        "generatedNumber": data['number']
    };
};
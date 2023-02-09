/**
 * Returns the result of simple math operations given two operands
 *
 * @param {object} stepConfig.inputs
 * {string} operation, Sum, Rest, Multiply or Divide two numbers
 * {string} firstOperand, First operand
 * {string} secondOperand, Second operand
 * @param {object} stepConfig.context {object} context
 */
step.simpleCalculator = function (stepConfig) {

    switch (stepConfig.inputs.operation) {
        case 'SUM':
            return endpoint.sum(stepConfig.inputs.firstOperand, stepConfig.inputs.secondOperand);
        case 'REST':
            return endpoint.rest(stepConfig.inputs.firstOperand, stepConfig.inputs.secondOperand);
        case 'DIV':
            return endpoint.div(stepConfig.inputs.firstOperand, stepConfig.inputs.secondOperand);
        case 'MULT':
            return endpoint.mult(stepConfig.inputs.firstOperand, stepConfig.inputs.secondOperand);
    }
    return false;
};
/**
 * Returns the result of simple math operations given two operands
 *
 * @param {object} inputs
 * {string} operation, Sum, Rest, Multiply or Divide two numbers
 * {string} firstOperand, First operand
 * {string} secondOperand, Second operand
 */
step.simpleCalculator = function (inputs) {

    switch (inputs.operation) {
        case 'SUM':
            return endpoint.sum(inputs.firstOperand, inputs.secondOperand);
        case 'REST':
            return endpoint.rest(inputs.firstOperand, inputs.secondOperand);
        case 'DIV':
            return endpoint.div(inputs.firstOperand, inputs.secondOperand);
        case 'MULT':
            return endpoint.mult(inputs.firstOperand, inputs.secondOperand);
    }
    return false;
};
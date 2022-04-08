/**
 * Returns the result of simple math operations given two operands
 *
 * @param {string} operation, Sum, Rest, Multiply or Divide two numbers
 * @param {string} firstOperand, First operand
 * @param {string} secondOperand, Second operand
 */
step.simpleCalculator = function (operation, firstOperand, secondOperand) {

    switch (operation) {
        case 'SUM':
            return endpoint.sum(firstOperand, secondOperand);
        case 'REST':
            return endpoint.rest(firstOperand, secondOperand);
        case 'DIV':
            return endpoint.div(firstOperand, secondOperand);
        case 'MULT':
            return endpoint.mult(firstOperand, secondOperand);
    }
    return false;
};
/**
 * Returns the result of simple math operations given two operands
 *
 * @param {choice} operator, Sum, Rest, Multiply or Divide two numbers
 * @param {number} firstOperand, First operand
 * @param {number} secondOperand, Second operand
 */
step.simpleCalculator = function (operator, firstOperand, secondOperand) {

    let result = 0;

    switch (operator) {
        case 'SUM':
            result = endpoint.sum(firstOperand, secondOperand);
            break;
        case 'REST':
            result = endpoint.rest(firstOperand, secondOperand);
            break;
        case 'DIV':
            result = endpoint.div(firstOperand, secondOperand);
            break;
        case 'MULT':
            result = endpoint.mult(firstOperand, secondOperand);
            break;
    }
    return result;
};
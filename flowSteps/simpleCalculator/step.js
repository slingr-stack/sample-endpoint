/**
 * Returns the result of simple math operations given two operands
 *
 * @param {choice} operator, Sum, Rest, Multiply or Divide two numbers
 * @param {number} operand1, First operand
 * @param {number} operand2, Second operand
 */
step.simpleCalculator = function (operator, operand1, operand2) {

    let result = 0;

    switch (operator) {
        case 'SUM':
            result = endpoint.sum(operand1, operand2);
            break;
        case 'REST':
            result = endpoint.rest(operand1, operand2);
            break;
        case 'DIV':
            result = endpoint.div(operand1, operand2);
            break;
        case 'MULT':
            result = endpoint.mult(operand1, operand2);
            break;
    }
    return result;
};
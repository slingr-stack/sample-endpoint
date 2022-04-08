/**
 * Returns the result of simple math operations given two operands
 *
 * @param {string} operation, Sum, Rest, Multiply or Divide two numbers
 * @param {number} firstOperand, First operand
 * @param {number} secondOperand, Second operand
 */
step.simpleCalculator = function (operation, firstOperand, secondOperand) {
/*
    let result = 0;
    switch (operation) {
        case 'SUM':
            result = endpoint.sum({firstOperand: firstOperand}, {secondOperand: secondOperand});
            break;
        case 'REST':
            result = endpoint.rest({firstOperand: firstOperand}, {secondOperand: secondOperand});
            break;
        case 'DIV':
            result = endpoint.div({firstOperand: firstOperand}, {secondOperand: secondOperand});
            break;
        case 'MULT':
            result = endpoint.mult({firstOperand: firstOperand}, {secondOperand: secondOperand});
            break;
    }
*/
    return endpoint.sum({firstOperand: firstOperand}, {secondOperand: secondOperand});;
};
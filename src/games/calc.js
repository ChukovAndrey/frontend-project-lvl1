import getRandomNumber from '../generateRandomNumber.js';
import runGame from '../index.js';

const RULE = 'What is the result of the expression?';
const MAX_NUMBER = 20;
const OPERATORS = ['+', '-', '*'];

const getRandomOperator = () => {
  const randomIndex = getRandomNumber(OPERATORS.length);

  return OPERATORS[randomIndex];
};

const getOperationAnswer = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`unsupported operation "${operator}"`);
  }
};

const generateCalcGameData = () => {
  const firstOperand = getRandomNumber(MAX_NUMBER);
  const secondOperand = getRandomNumber(MAX_NUMBER);
  const operator = getRandomOperator();
  const task = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(getOperationAnswer(firstOperand, secondOperand, operator));

  return { task, correctAnswer };
};

export default () => runGame(RULE, generateCalcGameData);

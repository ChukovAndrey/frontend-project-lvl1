import getRandomNumber from '../generateRandomNumber.js';
import runGame from '../index.js';

const MAX_NUMBER = 100;
const RULE = 'Answer "yes" if the number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generatePrimeGameData = () => {
  const task = getRandomNumber(MAX_NUMBER);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';

  return { task, correctAnswer };
};

export default () => runGame(RULE, generatePrimeGameData);

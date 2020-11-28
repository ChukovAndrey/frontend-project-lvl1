import getRandomNumber from '../functions.js';
import runGame from '../index.js';

const MAX_NUMBER = 10;
const LENGTH_OF_PROGRESSION = 10;
const HIDE_PATTERN = '..';

const generateProgression = (startingPoint, step, progressionLength) => {
  const progressionArray = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progressionArray.push(startingPoint + step * i);
  }

  return progressionArray;
};

const startProgressionGame = () => {
  const rules = 'What number is missing in the progression?';
  const startingPoint = getRandomNumber(MAX_NUMBER);
  const step = getRandomNumber(MAX_NUMBER);
  const progression = generateProgression(startingPoint, step, LENGTH_OF_PROGRESSION);
  const randomIndex = getRandomNumber(LENGTH_OF_PROGRESSION - 1);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = HIDE_PATTERN;
  const task = `${progression.join(' ')}`;

  return { rules, task, correctAnswer };
};

export default () => runGame(startProgressionGame);

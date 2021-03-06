import promptly from 'promptly';

const SCORE_TO_WIN = 3;

export default async (rule, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  let counter = 0;

  while (counter < SCORE_TO_WIN) {
    const { task, correctAnswer } = generateGameData();
    console.log(`Question: ${task}`);
    const playerAnswer = await promptly.prompt('Your answer:  ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

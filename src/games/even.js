import readlineSync from 'readline-sync';
import { greeting, askuserName } from '../cli.js';

const isEven = (num) => num % 2 === 0;

const getRandomInt = (max) => Math.floor(Math.random() * max);
const gameEven = () => {
  const userName = askuserName();
  console.log(greeting(userName));
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(10) + 1;
    console.log(`Question: ${number}`);

    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const answerUser = readlineSync.question('Your answer: ').toLowerCase();
    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`'Let's try again, ${userName}!'`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEven;

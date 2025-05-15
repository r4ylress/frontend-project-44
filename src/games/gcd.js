import logickGame from '../index.js';
import getRandomInt from '../getRandomInt.js';
import { askuserName, greeting } from '../cli.js';


const generateQuestion = () => {
  const numOne = getRandomInt(99) + 1;
  const twoNum = getRandomInt(50) + 1;
  return `${numOne} ${twoNum}`;
};
const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
const resolveQuestion = (question) => {
  const [oneNumstr, twoNumstr] = question.trim().split(' ');

  const oneNum = Number(oneNumstr);
  const twoNum = Number(twoNumstr);
  return getGcd(oneNum, twoNum);
};

const brainGcd = () => {
  const userName = askuserName();
  console.log(greeting(userName));
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const question = generateQuestion();
    const correctAnswer = resolveQuestion(question);

    const isCorrect = logickGame(userName, question, String(correctAnswer));
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGcd;

import logickGame from '../index.js';
import getRandomInt from '../getRandomInt.js'
import { greeting, askuserName } from '../cli.js';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomInt(operations.length)];
};

const answerCorrectCalc = (questi) => {
  const [firstNum, operation, secondNum] = questi.split(' ');

  switch (operation) {
    case '*':
      return Number(firstNum) * Number(secondNum);

    case '+':
      return Number(firstNum) + Number(secondNum);

    case '-':
      return Number(firstNum) - Number(secondNum);
    default:
      return null;
  }
};

const generateQuestion = () => {
  const numOne = getRandomInt(5) + 1;
  const operator = getRandomOperation();
  const twoNum = getRandomInt(9) + 1;
  return `${numOne} ${operator} ${twoNum}`;
};

const brainCalculator = () => {
  const userName = askuserName();
  console.log(greeting(userName));
  console.log('What is the result of the expression?');
  let countCorrectAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const question = generateQuestion();
    const correctAnswer = String(answerCorrectCalc(question));

    const isCorrect = logickGame(userName, question, correctAnswer);

    if (!isCorrect) return;

    countCorrectAnswer += 1;
    if (countCorrectAnswer === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainCalculator;

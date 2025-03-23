import readlineSync from 'readline-sync';
import {
  logickGame, askuserName, greeting,
} from '../src/index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max);
const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  return operations[getRandomInt(operations.length)];
};

const answerCorrectCalc = (questi) => {
  const [firstNum, operation, secondNum] = questi.split(' ');

  switch (operation) {
    case '*':
      return (Number(firstNum) * Number(secondNum)).toString();

    case '+':
      return (Number(firstNum) + Number(secondNum)).toString();

    case '-':
      return (Number(firstNum) - Number(secondNum)).toString();
    default:
      return console.log('error: undefined operation');
  }
};

const generateQuestion = () => {
  const numOne = getRandomInt(99);
  const operator = getRandomOperation();
  const twoNum = getRandomInt(50);
  return `${numOne} ${operator} ${twoNum}`;
};

const gameCalculator = () => {
  const userName = askuserName();
  console.log(greeting(userName));
  console.log('What is the result of the expression?');
  let countCorrectAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const question = generateQuestion();
    const correctAnswer = Math.abs(answerCorrectCalc(question));

    const isCorrect = logickGame(userName, question, correctAnswer);

    if (!isCorrect) return;

    countCorrectAnswer += 1;
    if (countCorrectAnswer === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
gameCalculator();

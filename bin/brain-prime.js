#!/usr/bin/env node
import {
  logickGame, askuserName, greeting,
} from '../src/index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const brainPrime = () => {
  const userName = askuserName();
  console.log(greeting(userName));
  console.log('"yes" if given number is prime. Otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
    const question = random(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    const isCorrect = logickGame(userName, question, correctAnswer);
    if (!isCorrect) {
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
brainPrime();

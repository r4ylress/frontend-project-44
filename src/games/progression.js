#!/usr/bin/env node
import {
    logickGame, askuserName, greeting,
  } from '../index.js';

const generateProg = (start, step, progLength) => {
  const result = [];

  for (let i = start; result.length < progLength; i += step) {
    result.push(i);
  }
  return result;
};

const BrainprogressionGame = () => {
  const userName = askuserName();
  console.log(greeting(userName));
  console.log('What number is missing in the progression?');
  const progressionLength = 10;
  let start = Math.floor(Math.random() * 10);
  if (start < 5) {
    start = 5;
  }
  for (let i = 0; i < 3; i += 1) {
    const step = Math.floor(Math.random() * 5) + 1;
    const progression = generateProg(start, step, progressionLength);
    const hiddenIndex = Math.floor(Math.random() * progressionLength);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    const isCorrect = logickGame(userName, question, String(correctAnswer));
    if (!isCorrect) {
      return;
    }
}
  console.log(`Congratulations, ${userName}!`);
};
export default BrainprogressionGame;

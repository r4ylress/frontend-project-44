import readlineSync from 'readline-sync';

function logickGame(userName, questions, correctAnswer) {
  console.log(`Question: ${questions}`);
  const answerUser = readlineSync.question('Your answer: ').toLowerCase();
  if (correctAnswer === answerUser) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answerUser}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${userName}!'`);

  return false;
}
export default logickGame;

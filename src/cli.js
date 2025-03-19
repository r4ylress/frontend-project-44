import readlineSync from 'readline-sync';
const bebe = readlineSync.question('Your answer: ');
const gretting = (name) => `brain-games\nWelcome to the Brain Games!\nMay I have your name? ${name}\nHello, ${name}!`

export {gretting}
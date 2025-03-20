import readlineSync from 'readline-sync';

const askuserName = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ', { defaultInput: 'tirion' });
  return name;
};
const greeting = (name) => `Hello, ${name}!`;
export { greeting, askuserName };

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { parseUsername } from './cli/args.js';

const username = parseUsername();
console.log(`Welcome to the File Manager, ${username}!`);


const rl = readline.createInterface({ input, output });

rl.on('line', (line) => {
  switch (line.trim()) {
    case '.exit':
      rl.close();
      break;
    default:
      console.log('Invalid input');
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log(`Thank you for using File Manager, ${username}!`);
  process.exit();
});

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import { parseUsername } from './cli.js';
import { ls } from './navigation.js';
import { getHomeDir, execOsCommand } from './os-info.js';
import { execHashCommand } from './hash.js';
import { execCompressCommand } from './compress.js';
import { execDecompressCommand } from './decompress.js';
import { cp, mv, rm } from './files-operations.js';

const username = parseUsername();
console.log(`Welcome to the File Manager, ${username}!`);

const homeDirectory =  getHomeDir();

let currentDirectory = homeDirectory;

const pwd = () => console.log(`You are currently in ${currentDirectory}`);

pwd();

const checkCommand = async (command) => {
  if (command.startsWith('.exit')) {
    rl.close();
    return;
  }
  if (command.startsWith('ls')) {
    await ls(currentDirectory);
    pwd();
    return;
  }
  if (command.startsWith('os')) {
    execOsCommand(command);
    pwd();
    return;
  }
  if (command.startsWith('hash')) {
    await execHashCommand(command, currentDirectory);
    pwd();
    return;
  }
  if (command.startsWith('compress')) {
    await execCompressCommand(command, currentDirectory);
    pwd();
  }
  if (command.startsWith('decompress')) {
    await execDecompressCommand(command, currentDirectory);
    pwd();
  }
  if (command.startsWith('rm')) {
    await rm(command, currentDirectory);
  }
  if (command.startsWith('cp')) {
    await cp(command, currentDirectory);
  }
  if (command.startsWith('mv')) {
    await mv(command, currentDirectory);
  }
}

const rl = readline.createInterface({ input, output });

rl.on('line', (line) => {
  const command = line.trim().toLowerCase();
  checkCommand(command);
  rl.prompt();
})
.on('error', () => console.log('Operation failed'))
.on('close', () => {
  console.log(`Thank you for using File Manager, ${username}!`);
  process.exit();
});

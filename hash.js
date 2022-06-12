import { resolve } from 'path';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

// Calculate hash for file and print it into console
const calculateHash = async (path) => {
  try {
    const hash = createHash('sha256');
    hash.update(await readFile(path));
    const hex = hash.digest('hex');
    console.log(hex);
  } catch (err) {
    console.log('Operation failed');
  }
};

export const execHashCommand = async (command, currentDirectory) => {
  const commandArgs = command.split(' ');
  if (commandArgs.length !== 2) {
    console.log('Invalid input');
    return;
  }
  const path = resolve(currentDirectory, commandArgs[1].trim());
  await calculateHash(path);
}

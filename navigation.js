import { readdir } from 'fs';
import { resolve } from 'path';

// Go upper from current directory
// (when you are in the root folder this operation shouldn't change working directory)
export const up = (currentDirectory) => {
  const newPath = resolve(currentDirectory, './..');
  return newPath;
}

// Go to dedicated folder from current directory
// (path can be relative or absolute)
export const cd = (command, currentDirectory) => {
  const commandArgs = command.split(' ');
  if (commandArgs.length !== 2) {
    console.log('Invalid input');
    return;
  }
  const path = resolve(currentDirectory, commandArgs[1].trim());
  const newPath = resolve(currentDirectory, path);
  return newPath;
}

// List all files and folder in current directory and print it to console
export const ls = async (path) => {
  readdir(path, (err, files) => {
    if (err) console.log('Operation failed');
    console.log(files);
  });
}

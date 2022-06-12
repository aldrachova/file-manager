import { cp as copy, rm as remove } from 'fs';
import { basename, resolve } from 'path';

// Read file and print it's content in console
export const cat = (pathToFile) => {

};

// Create empty file in current working directory
export const add = (newFileName) => {

};

// Rename file
export const rn = (pathToFile, newFileName) => {

};

// Copy file
export const cp = async (command, currentDirectory) => {
  const commandArgs = command.split(' ');
  if (commandArgs.length !== 3) {
    console.log('Invalid input');
    return;
  }

  const source = resolve(currentDirectory, commandArgs[1]);
  const filename = basename(source);
  const destination = resolve(currentDirectory, commandArgs[2], filename);

  copy(source, destination, { errorOnExist: true, force: false }, (err) => {
      if (err) console.log('Operation failed');
      console.log('File was successfully copied');
  });
};

// Move file (same as copy but initial file is deleted)
export const mv = async (command, currentDirectory) => {
  const commandArgs = command.split(' ');
  if (commandArgs.length !== 3) {
    console.log('Invalid input');
    return;
  }
  const source = resolve(currentDirectory, commandArgs[1]);
  const filename = basename(source);
  const destination = resolve(currentDirectory, commandArgs[2], filename);

  copy(source, destination, { errorOnExist: true, force: false }, (err) => {
      if (err) console.log('Operation failed');
      remove(source, (err) => {
        if (err) console.log('Operation failed');
        console.log('File was successfully moved');
      });
  });
};

// Delete file
export const rm = async (command, currentDirectory) => {
  const commandArgs = command.split(' ');
  if (commandArgs.length !== 2) {
    console.log('Invalid input');
    return;
  }
  const path = resolve(currentDirectory, commandArgs[1].trim());
  remove(path, (err) => {
    if (err) console.log('Operation failed');
    console.log('File was successfully removed');
  });
};
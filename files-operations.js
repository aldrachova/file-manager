import { rm as remove } from 'fs';

// Read file and print it's content in console
export const cat = (pathToFile) => {

}

// Create empty file in current working directory
export const add = (newFileName) => {

}

// Rename file
export const rn = (pathToFile, newFileName) => {

}

// Copy file
export const cp = (pathToFile, pathToNewDir) => {

}

// Move file (same as copy but initial file is deleted)
export const mv = (pathToFile, pathToNewDir) => {

}

// Delete file
export const rm = async (pathToFile) => {
  remove(pathToFile, (err) => {
    if (err) console.log('Operation failed');
    console.log('File was successfully removed');
  });
}
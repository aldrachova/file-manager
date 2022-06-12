import { readdir } from 'fs';

// Go upper from current directory
// (when you are in the root folder this operation shouldn't change working directory)
export const up = (path) => {

}

// Go to dedicated folder from current directory
// (path can be relative or absolute)
export const cd = (path) => {

}

// List all files and folder in current directory and print it to console
export const ls = async (path) => {
  readdir(path, (err, files) => {
    if (err) console.log('Operation failed');
    console.log(files);
  });
}

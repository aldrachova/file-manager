import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

// Calculate hash for file and print it into console
export const calculateHash = async (path) => {
  try {
    const hash = createHash('sha256');
    hash.update(await readFile(path));
    const hex = hash.digest('hex');
    console.log(hex);
  } catch (err) {
    console.log('Operation failed');
  }
};

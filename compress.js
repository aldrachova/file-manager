import { resolve } from 'path';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';
import { ReadableStream } from './streams/readable.js'
import { WritableStream } from './streams/writable.js';

// Compress file (using Brotli algorithm)
const compress = async (sourcePath, destinationPath) => {
  const brotli = createBrotliCompress();
  const source = new ReadableStream(sourcePath);
  const destination = new WritableStream(destinationPath);

  pipeline(
    source, 
    brotli, 
    destination, 
    (err) => {
      if (err) console.log('Operation failed');
    }
  ); 
};

export const execCompressCommand = async (command, currentDirectory) => {
  const commandArgs = command.split(' ');
  if (commandArgs.length !== 3) {
    console.log('Invalid input');
    return;
  }
  const sourcePath = resolve(currentDirectory, commandArgs[1].trim());
  const destinationPath = resolve(currentDirectory, commandArgs[2].trim());
  await compress(sourcePath, destinationPath);
}

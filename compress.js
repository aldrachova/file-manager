import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream';
import { ReadableStream } from './streams/readable.js'
import { WritableStream } from './streams/writable.js';

// Compress file (using Brotli algorithm)
export const compress = async (sourcePath, destinationPath) => {
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

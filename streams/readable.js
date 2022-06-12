import { open, close } from "fs";
import { read as readFile } from "fs";
import { Readable } from "stream";

export class ReadableStream extends Readable {
  constructor(filename) {
    super();
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    open(this.filename, (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _read(n) {
    const buf = Buffer.alloc(n);
    readFile(this.fd, buf, 0, n, null, (err, bytesRead) => {
      if (err) {
        this.destroy(err);
      } else {
        this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
      }
    });
  }

  _destroy(err, callback) {
    if (this.fd) {
      close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

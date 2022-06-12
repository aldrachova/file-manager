import { open, close } from "fs";
import { write as writeFile } from "fs";
import { Writable } from "stream";

export class WritableStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  _construct(callback) {
    open(this.filename, "a", (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _write(chunk, encoding, callback) {
    writeFile(this.fd, chunk, callback);
  }

  _destroy(err, callback) {
    if (this.fd) {
      close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}

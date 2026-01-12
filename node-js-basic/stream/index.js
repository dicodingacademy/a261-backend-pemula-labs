import fs from 'fs';
import { resolve } from 'path';

const readableStream = fs.createReadStream(resolve('input.txt'), {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream(resolve('output.txt'));

readableStream.on('readable', () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on('end', () => {
  writableStream.end();
});

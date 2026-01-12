import fs from 'fs';
import { resolve } from 'path';

const fileReadCallback = (error, data) => {
  if(error) {
    console.log('Gagal membaca berkas');
    return;
  }
  console.log(data);
};

fs.readFile(resolve('data.txt'), 'utf8', fileReadCallback);

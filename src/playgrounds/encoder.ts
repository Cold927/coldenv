import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';

export const main = async (moduleRef, args: string[]) => {
  // const privateKey = fs.readFileSync(__dirname + '/../../private.key', 'utf-8');
  const data = fs.readFileSync(__dirname + '/../../development.json', 'utf-8');
  const token = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    '',
  ).toString();
  fs.writeFileSync('secret.txt', token);
};

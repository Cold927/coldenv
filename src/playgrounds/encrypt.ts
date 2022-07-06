import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';

export const main = async (moduleRef, args: string[]) => {
  const privateKey = fs.readFileSync(process.cwd() + '/private.key', 'utf-8');
  const data = fs.readFileSync(process.cwd() + '/development.json', 'utf-8');
  const token = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    privateKey,
  ).toString();
  fs.writeFileSync('secret.txt', token);
};

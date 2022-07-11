import * as fs from 'fs';
import * as CryptoJS from 'crypto-js';

export const main = async (moduleRef, args: string[]) => {
  const privateKey = fs.readFileSync(process.cwd() + '/private.key', 'utf-8');
  const token = fs.readFileSync(process.cwd() + '/secret.txt', 'utf-8');
  let bytes = CryptoJS.AES.decrypt(token, privateKey);
  let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  fs.writeFileSync('development.json', decryptedData);
};

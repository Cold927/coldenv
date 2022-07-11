"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const fs = __importStar(require("fs"));
const CryptoJS = __importStar(require("crypto-js"));
const main = async (moduleRef, args) => {
    const privateKey = fs.readFileSync(process.cwd() + '/private.key', 'utf-8');
    const token = fs.readFileSync(process.cwd() + '/secret.txt', 'utf-8');
    let bytes = CryptoJS.AES.decrypt(token, privateKey);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    fs.writeFileSync('development.json', decryptedData);
};
exports.main = main;
//# sourceMappingURL=decrypt.js.map
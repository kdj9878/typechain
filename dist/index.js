"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    //What is this mean?
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
//자바로 치면 class명 변수명 = new class(); 이런 느낌인가
//대신에 typescript에서는 변수명:class = new class();이렇게 하네
const genesisBlock = new Block(0, "12312332", "", "hello", 12354);
let blockchain = [genesisBlock];
const getBlockChain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const date = new Date();
let time = date.getTime() / 1000;
console.log(time);
console.log(blockchain);
//# sourceMappingURL=index.js.map
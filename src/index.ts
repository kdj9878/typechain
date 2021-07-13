import * as CryptoJS from "crypto-js";

class Block{
    public index:number;
    public hash:string;
    public previousHash:string;
    public data: string;
    public timestamp:number;

    static calculateBlockHash =
     (index:number, previousHash:string, timestamp:number, data:string):string => 
     CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
     //What is this mean?

    constructor(index:number,
        hash:string,
        previousHash:string,
        data: string,
        timestamp:number)
    {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}



//자바로 치면 class명 변수명 = new class(); 이런 느낌인가
//대신에 typescript에서는 변수명:class = new class();이렇게 하네
const genesisBlock:Block = new Block(0, "12312332", "", "hello", 12354);

let blockchain:Block[]=[genesisBlock];

const getBlockChain = () :Block[] => blockchain;
const getLatestBlock = () :Block => blockchain[blockchain.length-1]
const getNewTimeStamp = () : number => Math.round(new Date().getTime()/1000);

const date = new Date();
let time = date.getTime()/1000;
console.log(time);
console.log(blockchain);
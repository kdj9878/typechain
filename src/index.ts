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
     //암호코드를 만들어 내는 CrytoJS의 기능 중 SHA256 알고리즘을 사용
    static validateStructure = (aBlock:Block):boolean =>
        typeof aBlock.index ==="number" && 
        typeof aBlock.hash === "string" && 
        typeof aBlock.previousHash === "string" &&
        typeof aBlock.timestamp === "number" &&
        typeof aBlock.data === "string";
    

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
//what does this mean?

const getBlockChain = () :Block[] => blockchain;
const getLatestBlock = () :Block => blockchain[blockchain.length-1]
const getNewTimeStamp = () : number => Math.round(new Date().getTime()/1000);
const createNewBlock = (data:string):Block => {
    const previosBlock:Block = getLatestBlock();
    const newIndex:number = previosBlock.index +1;
    const newTimestamp:number = getNewTimeStamp();
    const newHash:string = Block.calculateBlockHash(newIndex, previosBlock.hash, newTimestamp, data);
    //새로운 해시 값을 넣음

    const newBlock:Block = new Block(newIndex, newHash, previosBlock.hash, data, newTimestamp);
    //최종적으로 새로운 블록을 만들어냄
    //근데 왜 이전블록의 해시값을 넣는거지?

    addBlock(newBlock);
    return newBlock;
}


const getHashforBlock = (aBlock:Block) :string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data)

const isBlockValid = (candidateBlock:Block, previousBlock:Block):boolean =>{
    if(!Block.validateStructure(candidateBlock)){
        return false;
    }
    else if(previousBlock.index + 1 !== candidateBlock.index){
        return false;
    }
    else if(previousBlock.hash !== candidateBlock.previousHash){
        return false;
    }
    else if(getHashforBlock(candidateBlock) !== candidateBlock.hash){
        return false;
    } else{
        return true;

    }

}

const addBlock = (candidateBlock:Block) :void => {
    if(isBlockValid(candidateBlock, getLatestBlock())){
        blockchain.push(candidateBlock)
    }
}

createNewBlock("second_Block");
createNewBlock("third_Block");
createNewBlock("4th_Block");

console.log(blockchain)
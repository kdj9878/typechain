
class HuamnClass {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}



interface Human {
    name:string;
    age:number;
    gender:string;
}

const lynn = new HuamnClass("lynn", 24, "female");

const sayHi = (person: Human): string => {
                        //뒤에 물음표를 붙이면 선택적
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
  
}

console.log(sayHi(lynn));

export{};
//이 파일이 exprot된다는 것을 이해할 수 있도록 항상 밑에 적어주어야 한다?
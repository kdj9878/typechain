"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HuamnClass {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new HuamnClass("lynn", 24, "female");
const sayHi = (person) => {
    //뒤에 물음표를 붙이면 선택적
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(lynn));
//이 파일이 exprot된다는 것을 이해할 수 있도록 항상 밑에 적어주어야 한다?
//# sourceMappingURL=practice.js.map
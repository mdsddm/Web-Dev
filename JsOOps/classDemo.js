class Person {
    constructor(name, age) {
        this.name;
        this.age;
    }
    talk() {
        console.log(`hi, i am ${this.name}`);

    }
}

let p1 = new Person("adam", 23);
let p2 = new Person("bob", 12);
console.log(p1.talk === p2.talk);

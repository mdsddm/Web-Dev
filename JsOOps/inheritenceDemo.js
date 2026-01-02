class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hi, i am ${this.name}`);

    }
}
/*  Inheritance:
Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.   */
class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}
class Teacher extends Person {
    constructor(name, age, sub) {
        super(name, age);
        this.sub = sub;
    }
}

let s1 = new Student("adam", 23, 95);
let t1 = new Teacher("bob", 45, "math");
s1.greet();
t1.greet();
console.log(s1.greet === t1.greet);

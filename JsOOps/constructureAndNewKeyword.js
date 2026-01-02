function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.talk = function () {
    console.log(`hi, my name is ${this.name}`);

}
/*  New operator : 
The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.   */

let p1 = new Person("adam", 34);
let p2 = new Person("bob", 43);
console.log(p1.talk === p2.talk);

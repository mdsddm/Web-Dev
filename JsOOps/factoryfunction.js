function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`my name is ${name}`);
        }
    }
    return person;
}
let p1 = PersonMaker("Bob", 24);
let p2 = PersonMaker("adam", 34);
console.log(p1);
p1.talk();

// talk is although a common still it create a seprate copy
console.log(p1.talk === p2.talk);


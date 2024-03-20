
interface Person {
    name: string;
    age: number;
    email: string;
}

function printPerson(person: Person) {
    console.log(`${person.name} är ${person.age} år och har e-post: ${person.email}`);
}

function isAdult(person: Person) : boolean {
    return person.age >= 18;
}

let p1 : Person = { name : "david", age : 45, email: "david@david.se" };
let p2 : Person = { name : "Susan", age : 40, email: "susan@david.se" };

p1.name = "Lois";
p2.age = 10;

// console.log(isAdult(p1));
// console.log(isAdult(p2));

let p3 = p2;

p2.name = "Laura";

printPerson(p1);
printPerson(p2);
printPerson(p3);

let name1 : string = "Jacob";
let name2 = name1;

name1 = "Per"

console.log(name1);
console.log(name2);

const header1 = document.getElementById("header")!;


header1.style.backgroundColor = "red";


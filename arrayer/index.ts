let name1  : string = "David";
let name2 = "Susan";

//                          0       1       2        3
let names : string[] = ["David", "Susan", "Lois", "Laura"];

let numbers : number[] = [2 , 3 , 6, 4];

// console.log(names[2]);

// names.push("Luna");

// console.log(names[4]);

// names[1] = "Jacob";

// console.log(names[1]);


// let input = "";

// while( input !== "Exit") {
//     input = prompt("Skriv ett namn") ?? "Exit";
//     names.push(input);
// }

// // for(let i = 0; i < names.length; i++) {
// //     console.log(names[i])
// // }

// for(let name of names) {
//     console.log(name);
// }

// let sum = 0;

// for(let value of numbers) {
//     sum += value;
// }

// console.log(sum);


interface Person {
    name : string;
    age : number;
}

let p1 = {name: "Lois", age: 10};
let p2 = {name: "Laura", age: 13};

let persons : Person[] = [p1, p2];

persons.push({name: "Jacob", age : 50});

let sum = 0;
for(let person of persons) {
    console.log(person.name);
    sum += person.age;
}

console.log(`Deras gemensamma åler är ${sum} år`);
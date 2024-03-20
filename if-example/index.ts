// let tal = prompt('Skriv ett tal');

// let number = Number(tal);


// if (number > 0) {
//     console.log('Talet är positivt');
// } else if (number < 0) {
//     console.log('Talet är negativt');
// } else if (number === 0) {
//     console.log('Talet är 0');
// }


// let discount : boolean = false;

// if (discount) {
//     console.log("ditt pris är 25kr");
// } else {
//     console.log("ditt pris är 50kr");
// }

const VALID_CODE = 'nykund';
let discount : boolean = false;

let input = prompt("Har du en rabbattkod?");

if (input === 'ja') {
    let code = prompt('Skriv din rabbatkod');
    if (code === VALID_CODE) {
        discount = true;
    }
}

if (discount) {
    console.log("ditt pris är 25kr");
} else {
    console.log("ditt pris är 50kr");
}
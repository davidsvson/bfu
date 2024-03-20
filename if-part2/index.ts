
// const input = prompt("Skriv ett tal");

// const inputNumber = Number(input);


// if (inputNumber > 10 && inputNumber < 20) {   
//     console.log("Talet är lagom stort");
// }


// const input = prompt("Skriv en frukt");

// if (input?.includes('a') || input?.includes('e') ) {
//     console.log("det finns ett a eller ett e");
// }


// const input = prompt("Skriv din ålder");

// const age = Number(input);

// if (age >= 18) {
//     console.log("Du är myndig");
// } else {
//     console.log("Du är inte myndig");
// }

// const message = age >= 18 ? "Du är myndig" : "Du är inte myndig";
// console.log(message);

// let member : boolean= false;

// let price = member ? 10 : 15;

// console.log(`Varan kostar ${price} kr`);

//switch


let language = 'asldkf';

// if (language === 'sv') {
//     console.log("Hej");
// } else if (language === 'en') {
//     console.log("Hello");
// } else if (language === 'nl') {
//     console.log('Hoi');
// }

switch (language) {
    case 'sv' :
        console.log("Hej");
        break;
    case 'en' : 
        console.log("Hello");
        break;
    case 'nl' : 
        console.log('Hoi');
        break;
    default :
        console.log ('okänt språk');
}

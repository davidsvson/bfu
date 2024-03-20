
const input = prompt("Gissa på ett tal mellan 1 och 20");

const guessedNumber = Number(input);

let randomNumber: number = Math.floor(Math.random() * 20) + 1;

const diff = guessedNumber - randomNumber;

if (guessedNumber === randomNumber) {
    console.log("Wow, du gissade rätt!");
} else if (diff < -5) {
    console.log("Du gissade för mycket för lågt");
} else if( diff > 5) {
    console.log("Du gissade för mycket för högt");
} else if (guessedNumber > randomNumber) {
    console.log("Du gissade för högt!");
} else if (guessedNumber < randomNumber) {
    console.log("Du gissade för lågt");
}

console.log(randomNumber);
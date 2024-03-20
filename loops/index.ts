

//while

// let sum = 0;
// let count = 0;

// while(sum <= 100 ) {
//     sum+=3;
//     count++;
// }

// console.log(sum);
// console.log(count);

// let input = ""
// let count = 0;

// while( input !== "Stockholm" ) {
//     input = prompt("Vad heter Sveriges huvudstad?") ?? "";
//     count++;
// }

// console.log(`Bra du svarde rätt på ${count} försöket`);


// for(let i = 0 ; i < 10 ; i++ ) {
//     console.log(`${i} gången`);
// }

const input = prompt("Hur många gånnger vill du hälsa?");

const count = Number(input);


for(let i = 0; i < count; i++) {
    console.log(`Hej ${i+1}`);
}




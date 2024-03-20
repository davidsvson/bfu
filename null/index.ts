

// if (headline) {
//     headline.innerText = "David";
//     headline.style.backgroundColor = "red";
// }

const headline = document.getElementById("headline")!;

function calculateSplit(sum: number, count: number) : number {
    return sum / count;
}
 
const sumInput = prompt("Skriva totala summan:");
const sum = Number(sumInput);

const peopleCountInput = prompt("Hur många personer:");
const peopleCount = Number(peopleCountInput);

const split = calculateSplit(sum, peopleCount);

headline.innerText = String(split);




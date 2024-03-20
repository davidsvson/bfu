// Skriv ett program som omvandlar från äldre svenska längdenheter till cm

// Vilken enhet vill du omvandla från?
// > aln
// Hur många alnar?
// > 12
// Svar: 12 alnar är 712,8 cm

//Famn (längdmått till sjöss). En svensk famn är 6 fot = 3 alnar = 1,78 meter.
//Aln 1 aln = 2 fot = 4 kvarter = 59,4 cm.
//Kvarter 1 kvarter = 1/4 aln = 6 tum (verktum) = 14,84 cm.

function famnToCm(famn: number) : number {
    const answer = famn * 178;

    return answer;
}

function alnToCm(aln: number) : number {
    return aln * 59.4;
}

function kvarterToCm(kvarter: number) : number {
    return kvarter * 14.84;
}


const selectedUnit = prompt("Vilken enhet vill du omvandla från?");
const input = Number(prompt(`Hur många ${selectedUnit}ar?`));

let answer : number = 0;

if (selectedUnit === "famn") {
    answer = famnToCm(input);
} else if (selectedUnit === "aln") {
    answer = alnToCm(input);
} else if (selectedUnit === "kvarter") {
    answer = kvarterToCm(input);
}

console.log(`Svar: ${input} ${selectedUnit}ar är ${answer}`);


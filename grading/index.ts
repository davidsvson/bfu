// Betygsbedömningssystem

// Skapa ett program som tar emot en studentens poäng 
// och ger hen ett betyg baserat på följande kriterier:

// 90-100 poäng: A
// 80-89 poäng: B
// 70-79 poäng: C
// 60-69 poäng: D
// Under 60 poäng: F


function menu() {
    console.log("1. Information om betygsskala");
    console.log("2. Bedöm betyg");
    console.log("3. Avsluta");

    const choice = prompt("Välj ett alternativ (1-3):");

    switch(choice) {
        case "1":
            printGradingSystem();
            break;
        case "2":
            handleGrading();
            break;
        case "3":
            console.log("Tack för idag");
            break;
        default:
            console.log("Ogiltigt val");
    }
}


function printGradingSystem() {
    console.log(" 90-100 poäng: A");
    console.log(" 80-89 poäng: B");
    console.log(" 70-79 poäng: C");
    console.log(" 60-69 poäng: D");
    console.log(" Under 60 poäng: F");
}

function handleGrading() {
    const input = prompt('Hur många poäng?');
    const points = Number(input);
    
    const grade = getGradeByPoints(points);
    
    console.log(`${points} poäng motsvarar betyget ${grade}`);
}

function getGradeByPoints(points: number) : string {
    if (points >= 90 && points <= 100) {
        return "A";
    } else if (points >= 80 && points <= 89) {
        return "B";
    } else if (points >= 70 && points <= 79) {
        return "C";
    }else if (points >= 60 && points <= 69) {
        return "D";
    }else if (points < 60) {
        return "F";
    }else {
        return "";
    }
}

menu();

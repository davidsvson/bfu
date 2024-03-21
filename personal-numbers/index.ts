//8112189876

//
//0 1 2 3 4 5 6 7 8 
//8 1 1 2 1 8 9 8 7         6

//2 1 2 1 2 1 2 1 2

function isValidPersonalNumber(personalNumber: string ) : boolean {
    if (personalNumber.length !== 10) {
        return false;
    }


    let sum = 0;
    for(let i = 0; i < 9; i++) {
        let digit = Number(personalNumber?.charAt(i));
        if (i % 2 === 0 ) {
            digit *= 2;
            if (digit > 9) {
                const digitString = String(digit);
                digit = Number(digitString.charAt(0)) + Number(digitString.charAt(1));
            }
        }    
        sum += digit;  
    }

    const calculatedControlDigit = (10 - (sum % 10)) % 10
   
    return calculatedControlDigit === Number(personalNumber.charAt(9));
}


function main() {
    const personalNumber = prompt("Ange ditt personnummer (ÅÅMMDDXXXX)");

    if (personalNumber) {
        const valid = isValidPersonalNumber(personalNumber);

        if (valid ) {
            console.log("Kontrollsiffran stämmer");
        } else {
            console.log("Kontrollsiffran stämmer inte");
        }
    } else {
        console.log("Ogiltigt personnummer");
    }
}

main();
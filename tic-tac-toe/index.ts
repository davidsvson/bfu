let board : string[] = [" ", " ", " ", " ", " ", " ", " ", " ", " " ];
let currentPlayer : string = "x";
let count = 0;

function printBoard() {
    console.log("--------------");
    console.log(`| ${board[0]} | ${board[1]} | ${board[2]} |`);
    console.log(`| ${board[3]} | ${board[4]} | ${board[5]} |`);
    console.log(`| ${board[6]} | ${board[7]} | ${board[8]} |`);
    console.log("--------------");
}

function makeMove(position : number) {
    board[position] = currentPlayer;
}

function switchPlayer() {
    if (currentPlayer === "x") {
        currentPlayer = "o";
    } else {
        currentPlayer = "x";
    }
}

function isValidMove(position : number ) : boolean {
    if ( position < 0 || position > 8) {
        return false;
    } 
    if (board[position] !== " ") {
        return false;
    }

    return true;
}

function play() {
    while(count < 9 ) {
        printBoard();
        const input = prompt(`Spleare ${currentPlayer}, välj en plats (1-9):`);
        const position = Number(input) - 1;
        if (isValidMove(position)) {
            makeMove(position);
            count++;
            switchPlayer();
        } else {
            console.log("Ogiltig plats");
        }
    }
    printBoard();
}

play();

interface Question {
    question : string;
    answer : string;
}

let score : number = 0;

const q1 : Question = { question: "Vad heter huvudstaden i Sverige?", answer: "Stockholm"};
const q2 : Question = { question: "Vad heter huvudstaden i Norge?", answer: "Oslo"};

const answerElement = document.getElementById("answer");
const scoreElement = document.getElementById("score");

function updateScore() {
    if (!scoreElement) {
        return
    }

    scoreElement.innerText = String(score)
}


function askQuestion(question: Question) {
    if (!answerElement) {
        return
    }

    const input = prompt(question.question);

    if ( input?.toLowerCase() === question.answer.toLowerCase()) {
        score++;
        answerElement.innerText = "Rätt!";
    } else {
        answerElement.innerText = `Fel. Rätt svar är ${question.answer}`;
    }
    updateScore();
}

askQuestion(q1);
setTimeout(() => askQuestion(q2), 0);



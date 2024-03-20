interface Question {
    question : string
    answer : string
}

const answer = document.getElementById("answer");

function askQuestion(question : Question) {
    if (!answer) {
        return
    }

    const input = prompt(question.question);

    if (input?.toLowerCase() === question.answer.toLowerCase()) {
        answer.innerText = "Rätt!"
    } else {
        answer.innerText = `Fel rätt svar är ${question.answer}`;
    }
}

const q1 : Question = { question : "Vad heter Sveriges huvudstad", answer : "Stockholm"};
const q2 : Question = { question : "Vad heter Norges huvudstad", answer : "Oslo"};


askQuestion(q1);
setTimeout(() => askQuestion(q2), 0);
const questions = [
    {
        question: "which is the largest animal in the world",
        answers: [
            { text: "shark", correct: false },
            { text: "blue whale", correct: true },
            { text: "giraffe", correct: false },
            { text: "elephant", correct: false },
        ],
    },
    {
        question: "which is the smallest continent in the world",
        answers: [
            { text: "Asia", correct: false },
            { text: "australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ],
    },
    {
        question: "which is the largest desert in the world",
        answers: [
            { text: "kalhari", correct: false },
            { text: "sahara", correct: true },
            { text: "antarctica", correct: false },
            { text: "gobi", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    // Clear previous answer buttons
    answerButton.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(answer.correct));
        answerButton.appendChild(button);
    });
}

function checkAnswer(correct) {
    if (correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Quiz is finished
        alert("Quiz finished. Your score: " + score);
    }
}

startQuiz();

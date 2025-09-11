const questions = [
    {
        question: "Qual é o clima predominante do bioma Amazônia?",
        answers: [
            { id: 1, text: "Clima temperado", correct:false },
            { id: 2, text: "Clima tropical úmido", correct:true },
            { id: 3, text: "Clima desértico", correct:false },
            { id: 4, text: "Clima polar", correct:false },
        ],
    },
    {
        question: "Em quais países está localizada a maior parte da Amazônia Internacional?",
        answers: [
            { id: 1, text: "Brasil, Peru e Colômbia", correct:true },
            { id: 2, text: "Brasil, Argentina e Chile", correct:false },
            { id: 3, text: "Venezuela, Uruguai e Paraguai", correct:false },
            { id: 4, text: "México, Brasil e Bolívia", correct:false },
        ],
    },
    {
        question: "Qual é o principal rio que corta a Bacia Amazônica",
        answers: [
            { id: 1, text: "Rio Madeira", correct:false },
            { id: 2, text: "Rio Amazonas", correct:true },
            { id: 3, text: "Rio Tapajós", correct:false },
            { id: 4, text: "Rio Negro", correct:false },
        ],
    },
    {
        question: " Aproximadamente quantas espécies de plantas a Floresta Amazônica abriga?",
        answers: [
            { id: 1, text: "5 mil", correct:false },
            { id: 2, text: "20 mil", correct:false },
            { id: 3, text: "40 mil", correct:true },
            { id: 4, text: "100 mil", correct:false },
        ],
    },
    {
        question: "Quantas espécies de aves são encontradas na Floresta Amazônica?",
        answers: [
            { id: 1, text: "300", correct:false },
            { id: 2, text: "1.300", correct:true },
            { id: 3, text: "2.000", correct:false },
            { id: 4, text: "4.000", correct:false },
        ],
    },
]

const questionElement = document.getElementById("enunciado1");
const answerButtons = document.getElementById("questão1");
const nextButton = document.getElementById("proximo-botao");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima"
    showQuestion();
}

/*function resetState(){
    nextButton.style.display = "none"
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}*/

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach ((answer) => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("botao")
        answerButtons.appendChild(button);
    })
}

startQuiz();
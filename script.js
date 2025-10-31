const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Home Tool Management Language",
      "Hyperlink and Text Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-style", "color", "background-color", "text-align"],
    correct: 1
  },
  {
    question: "What symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const labels = [
  document.getElementById("label1"),
  document.getElementById("label2"),
  document.getElementById("label3"),
  document.getElementById("label4")
];
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const form = document.getElementById("quiz-form");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  labels.forEach((label, index) => {
    label.textContent = q.options[index];
  });
  form.reset(); // clear any previously selected answer
  resultEl.textContent = "";
}

function getSelected() {
  const radios = document.getElementsByName("answer");
  for (let radio of radios) {
    if (radio.checked) return parseInt(radio.value);
  }
  return null;
}

nextBtn.onclick = () => {
  const answer = getSelected();
  if (answer === null) {
    resultEl.textContent = "⚠️ Please select an answer!";
    return;
  }

  if (answer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showFinalResult();
  }
};

function showFinalResult() {
  questionEl.textContent = "Quiz Completed!";
  form.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your Score: ${score}/${quizData.length}`;
}

// Load first question
loadQuestion();

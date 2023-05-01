//Questions array

var startButton = document.querySelector("#start");
var nextButton = document.querySelector("#nextButton");

var startingTime = 1;
var time = startingTime * 60; 
var timerEl = document.querySelector(".timer")
var currentQuestion;
var answerButton = document.querySelectorAll(".answerButton");


var quizQuestions = [
  {
    question: "Strings are enclosed in__",
    option1: "parenthesis",
    option2: "brackets",
    option3: "dollar signs",
    option4: "quotation marks",
    answer: "quotation marks",
  },
  {
    question: "To select an element you can use__",
    option1: "event.preventDefault",
    option2: "document.querySelector",
    option3: "add.EventListener",
    option4: "Math.floor",
    answer: "document.querySelector",
  },
  {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  }
];

var questionEl = document.querySelector("#questions");
var answerListEl = document.querySelector("#answersList");
var answerMessage = document.querySelector("#answerMessage");
var saveScore = document.querySelector("#saveScore");
var scoreText = document.querySelector("#scoreText");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var questionCount = 0;

var score = localStorage.getItem("score") || 0 

answerListEl.style.display = "none";
nextButton.style.display = "none"; 
var ul = document.querySelector('ul')
ul.style.display = "none"
saveScore.style.display = "none"
scoreText.style.display = "none"

var minutes = Math.floor(time / 60);
  var seconds = time % 60; 
  var currentTime = `${minutes}: ${seconds}`;

function displayTimer () {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60; 
  var currentTime = `${minutes}: ${seconds}`;
  timerEl.textContent = currentTime;
    time--;  
if (currentTime === 0 ); {
    clearInterval();
  }   
}

//Click button to start quiz
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
setInterval(displayTimer, 1000);
  showQuiz();
  startButton.style.display = "none"; 
  if (currentTime === 0 ); {
    clearInterval();
  }   
});

function showQuiz() {
    
  nextButton.style.display = "inline";
  ul.style.display = "flex";
  questionEl.innerHTML = quizQuestions[questionCount].question;
  answer1.textContent = quizQuestions[questionCount].option1;
  answer2.textContent = quizQuestions[questionCount].option2;
  answer3.textContent = quizQuestions[questionCount].option3;
  answer4.textContent = quizQuestions[questionCount].option4;  
  }

  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    questionCount++ 
   showQuiz();
   if (questionCount === 2) {
    displayScore();
   }

  });
  
  answerListEl.style.display = "inline";
  
  function answerOutcomesMessage (event) {
    console.log(event.target)
    console.log(event.target.textContent)
    var selectedAnswer = event.target.textContent
    if (selectedAnswer == quizQuestions[questionCount].answer) {
     messageDisplay("Correct");
     score++;
     localStorage.setItem("score", score);
     
    } 
     else {
      messageDisplay("Incorrect")
      score--
      localStorage.setItem("score", score);
    }
    console.log(score)
  }

  function messageDisplay (answer) {
setTimeout(() => {
  answerMessage.textContent = ""
}, 1000)
answerMessage.textContent = answer
  }
  
  function displayScore () {
    nextButton.style.display = "none";
    ul.style.display = "none";
    answerListEl.display = "none";
    saveScore.style.display = "inline";
    scoreText.style.display = "inline";
    document.querySelector('#score').textContent = score 

    
  }

 


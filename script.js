//Questions array

var startButton = document.querySelector("#start");
var nextButton = document.querySelector("#nextButton");
var startingTime = 2;
var time = startingTime * 60; 
var timerEl = document.querySelector(".timer")
var currentQuestion;

var quizQuestions = [
  {
    question: "question1 will think of a better question later",
    option1: "right answer",
    option2: "4",
    option3: "answer3",
    option4: "answer4",
    answer: "4",
  },
  {
    question: "question numero dos",
    option1: "answer1",
    option2: "answer2",
    option3: "answer3",
    option4: "answer4",
    answer: "answer2",
  },
];
var questionEl = document.querySelector("#questions");
var answerListEl = document.querySelector("#answersList");
var answerMessage = document.querySelector("#answerMessage");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var questionCount = 0;

var score

answerListEl.style.display = "none";
nextButton.style.display = "none"; 

function displayTimer () {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60; 
  var currentTime = `${minutes}: ${seconds}`;
  timerEl.textContent = currentTime;

    time--;   
}

//Click button to start quiz
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
setInterval(displayTimer, 1000);
  showQuiz();
  startButton.style.display = "none"; 
});

function showQuiz() {
    //var currentQuestion =  quizQuestions[questionCount];
  nextButton.style.display = "inline";
  questionEl.innerHTML = quizQuestions[questionCount].question;
  answer1.textContent = quizQuestions[questionCount].option1;
  answer2.textContent = quizQuestions[questionCount].option2;
  answer3.textContent = quizQuestions[questionCount].option3;
  answer4.textContent = quizQuestions[questionCount].option4;  
  }
  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    questionCount++ 
   showQuiz()
   
  });

  answerListEl.style.display = "inline";
  function correctAnswers (event) {
    console.log(event.target)
    console.log(event.target.textContent)
    var selectedAnswer = event.target.textContent
    if (selectedAnswer == quizQuestions[questionCount].answer) {
     messageDisplay("Correct");
    } 
    else {
      messageDisplay("Incorrect")
    }
  }

  function messageDisplay (answer) {
setTimeout(() => {
  answerMessage.textContent = ""
}, 1000)
answerMessage.textContent = answer
  }
  
  
  //var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
 // var timeLeft = 10 

 


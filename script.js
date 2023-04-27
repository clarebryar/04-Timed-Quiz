//Questions array

var startButton = document.querySelector("#start");
var nextButton = document.querySelector("#nextButton");

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


//Click button to start quiz
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
  showQuiz();
  startButton.style.display = "none";
  
});

function showQuiz() {
    //var currentQuestion =  quizQuestions[questionCount];
  nextButton.style.display = "inline";
  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    questionEl.innerHTML = quizQuestions[questionCount].question;
    answer1.textContent = quizQuestions[questionCount].option1;
    answer2.textContent = quizQuestions[questionCount].option2;
    answer3.textContent = quizQuestions[questionCount].option3;
    answer4.textContent = quizQuestions[questionCount].option4;

    //if quizQuestions.option == quizQuestions.answer {
      
    //}

    questionCount++;
   
  });
  }
  answerListEl.style.display = "inline";
  function correctAnswers () {
    
  }

  
  
  //var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
 // var timeLeft = 10 

 var startingTime = 2;
 var time = startingTime * 60; 
 var timerEl = document.querySelector(".timer")
setInterval(displayTimer, 1000);

function displayTimer () {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60; 
  var currentTime = `${minutes}: ${seconds}`;
  timerEl.textContent = currentTime;

    time--;   
}
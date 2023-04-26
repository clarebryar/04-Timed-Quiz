//Questions array

var startButton = document.querySelector("#start")

var currentQuestion;

var quizQuestions = [
  {
    question: "question1 will think of a better question later",
    options: ["answer1", "answer2", "answer3", "answer4"],
    answer: 1
  },
  {
    question: "question numero dos",
    options: ["answer1",  "answer2", "answer3", "answer4","answer3"],
    answer: 2
  },
];
var questionEl = document.querySelector("#questions")
var answerListEl = document.querySelector("#answersList")

var answersClass = document.querySelectorAll(".answers")

var questionCount = 0 


//Click button to start quiz
startButton.addEventListener("click", function (event) {
  event.preventDefault();
console.log(event);
var currentQuestion =  quizQuestions[questionCount];
   console.log(currentQuestion);

   questionEl.innerHTML = currentQuestion.question;
   answersClass.innerHTML = currentQuestion.options;
   questionCount++
});

//function displayQuizContent() {
//   var currentQuestion =  quizQuestions[questionCount];
  // console.log(currentQuestion);

   //questionEl.innerHTML = currentQuestion.question;
   //answer1El.innerHTML = currentQuestion.option1;
   //answer2El.innerHTML = currentQuestion.option2;
   //answer3El.innerHTML = currentQuestion.option3;
   //answer4El.innerHTML = currentQuestion.option4;
   //questionCount++
  
//}
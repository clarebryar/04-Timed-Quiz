//Questions array

var startButton = document.querySelector("#start")

var currentQuestion;

var quizQuestions = [
  {
    question: "question1 will think of a better question later",
    option1: "right answer",
    option2: "4",
    option3: "answer3",
    option4: "answer4",
    answer: 1
  },
  {
    question: "question numero dos",
    options1: "answer1",
    option2:  "answer2",
    option3: "answer3",
    option4: "answer4",
    answer: 2
  },
];
var questionEl = document.querySelector("#questions")
var answerListEl = document.querySelector("#answersList")

var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");



var questionCount = 0 


//Click button to start quiz
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
  showQuiz();
});


function showQuiz() {
var currentQuestion =  quizQuestions[questionCount];
questionEl.innerHTML = quizQuestions[questionCount].question;
answer1.textContent = quizQuestions[questionCount].option1;
answer2.textContent = quizQuestions[questionCount].option2;
answer3.textContent= quizQuestions[questionCount].option3;
answer4.textContent = quizQuestions[questionCount].option4;
questionCount++
   
//for (var i = 0; i < options.quizQuestions[0].options.length; i++) {
  //answersClass
//}
  
  ///answersClass.forEach(function(element, index) {
 //   element.textContent = q.options[index]
   //});
};



//function displayQuizContent() {
//   
  
//}
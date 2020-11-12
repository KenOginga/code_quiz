// created an array of multiple choice questions and their respective answers.
var questionArray = [{
  question: "How many elements can you apply an 'ID' attribute to?",
  choiceA: "As many as you want",
  choiceB: "3",
  choiceC: "1",
  choiceD: "128",
  correctAnswer: "c"},
{
  question: "What does DOM stand for?",
  choiceA: "Document Object Model",
  choiceB: "Display Object Management",
  choiceC: "Digital Ordinance Model",
  choiceD: "Desktop Oriented Mode",
  correctAnswer: "a"},
 {
  question: "What is used primarily to add styling to a web page?",
  choiceA: "HTML",
  choiceB: "CSS",
  choiceC: "Python",
  choiceD: "React.js",
  correctAnswer: "b"},
  {
  question: "What HTML tags are JavaScript code wrapped in?",
  choiceA: "&lt;div&gt;",
  choiceB: "&lt;link&gt;",
  choiceC: "&lt;head&gt;",
  choiceD: "&lt;script&gt;",
  correctAnswer: "d"},   
  
  ];
// created global variables 
var timeLeft = 50;
var timeInterval;
var score = 0;
var correct;
var currentQuestionIndex = 0;
var finalQuestionIndex = questionArray.length;

// Created variables from HTML elements for manipulation.
var $startbtn =  document.getElementById("startbtn");
var clickStatement = document.getElementById("beginStatement");
var quizSection = document.getElementById("quiz-section");
var quizContainer = document.getElementById("quiz");
var introDiv = document.getElementById("introStatement");
var quizTime = document.getElementById("time");
var finalContainer = document.getElementById("final");

var choiceButtons = document.getElementById("btn btn-dark mt-3");
var buttonA = document.getElementById("btnA");
var buttonB = document.getElementById("btnB");
var buttonC = document.getElementById("btnC");
var buttonD = document.getElementById("btnD");



// This function generates the questions from the question array and alerts the user their score when the final question has been answered and also prompts for the user initals.
function generateQuestions(){
  clickStatement.style.display = "none";
  if (currentQuestionIndex === finalQuestionIndex){
    alert("You have completed the questions. Your score is " + score);
    clearInterval(timeInterval);
    prompt("Enter Your Initials")
  }
  var currentQuestion = questionArray[currentQuestionIndex];
  quizSection.innerHTML = ("<h2>" + currentQuestion.question + "</h2>");
  buttonA.innerHTML = currentQuestion.choiceA;
  buttonB.innerHTML = currentQuestion.choiceB;
  buttonC.innerHTML = currentQuestion.choiceC;
  buttonD.innerHTML = currentQuestion.choiceD;
};

// This function starts the timer upon clicking of the start button and alerts the user their score when the time is 0.
function startQuestions(){
  $startbtn.style.display = "none";
  clickStatement.style.display = "none"
  introDiv.style.display = "none";
  generateQuestions();

  timeInterval = setInterval(function(){
    timeLeft--;
    quizTime.textContent = ("Time Left: " + timeLeft);
    quizTime.style.fontSize = "250%";

    if(timeLeft === 0) {
      clearInterval(timeInterval);
      alert("Time is Over. Your Score is " + score);

    }
  }, 1000);

}
// this function verifys the answeres that the user selects. If the answer is correct, the user is alerted that their answer is either correct or incorrect and score of 1 is generated and added to the final score.
function verifyAnswer(answer) {
  correct = questionArray[currentQuestionIndex].correctAnswer;
  if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
    score++;
    alert("Correct Answer")
    currentQuestionIndex++
    generateQuestions();
  } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
    alert("Incorrect Answer");
    currentQuestionIndex++;
    generateQuestions();
  }
}
// this starts the questions once the user clicks on start.
$startbtn.addEventListener("click", startQuestions);
//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var lemonScore = 0;
var watermelonScore = 0;
var cherryScore = 0;
var pineappleScore = 0;




//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");




//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", lemon);
q1a2.addEventListener("click", watermelon);
q1a3.addEventListener("click", cherry);
q1a4.addEventListener("click", pineapple);

q2a1.addEventListener("click", pineapple);
q2a2.addEventListener("click", lemon);
q2a3.addEventListener("click", cherry);
q2a4.addEventListener("click", watermelon);








//#TODO: Define quiz functions here
function lemon(){
  lemonScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult()
  }
}

function watermelon(){
  watermelonScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult()
  }
}

function cherry(){
  lemonScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult()
  }
}

function pineapple(){
  lemonScore += 1;
  questionCount += 1;
  
  if (questionCount >= 3){
    updateResult()
  }
}
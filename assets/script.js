
//Variables
var timeEl = document.querySelector(".timer");
var timeRemaining = 61;
var mainEl = document.querySelector(".main");
var entryEl = document.querySelector("#initialMessage");
var buttonEl = document.querySelector("#button");
var startButton = document.querySelector(".start-btn");
var correctAns = document.querySelector("#correctAnswer");
var wrongAns = document.querySelector("#incorrectAnswer");
var quizEnd = document.querySelector(".quizEnd");
var quizScoreEl = document.querySelector("#quizScore");

var score = 0;

//Timer Function
function setTime(){
    var timer = setInterval(
        function(){
            timeRemaining--;
            timeEl.textContent= "Time Remaining: " + timeRemaining;

            if (timeRemaining === 0) {
                clearInterval(timer);
                sendMessage();
            }
        } , 1000);
}

//End Quiz Display
function sendMessage(){
quizEnd.style.display="block";
quizScoreEl.textContent= "Your Score: " + score;
}

function sendMessageCorrect(){
    quizEnd.style.display="block";
    score++;
    quizScoreEl.textContent= "Your Score: " + score; 
}

//Start Clicker Event Listeners
startButton.addEventListener("click", setTime);
startButton.addEventListener("click", startQuiz);

//Wrong Answer Function
function deductTime(){
    timeRemaining = timeRemaining-10;
}

//Correct Answer Functions
function nextQuestion2(){
    question1.style.display="none";
    question2.style.display="block";
}

function nextQuestion2Correct(){
    question1.style.display="none";
    question2.style.display="block";
    score++;
}

function nextQuestion3(){
    question2.style.display="none";
    question3.style.display="block";
}

function nextQuestion3Correct(){
    question2.style.display="none";
    question3.style.display="block";
    score++;
}

function nextQuestion4(){
    question3.style.display="none";
    question4.style.display="block";
}

function nextQuestion4Correct(){
    question3.style.display="none";
    question4.style.display="block";
    score++;
}

function nextQuestion5(){
    question4.style.display="none";
    question5.style.display="block";
}

function nextQuestion5Correct(){
    question4.style.display="none";
    question5.style.display="block";
    score++;
}

//Question Variables
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");

function hideFinal(){
    question5.style.display="None";
}

//Start Quiz Function
function startQuiz(){
    console.log("hello");
    question1.style.display = "block";
    mainEl.style.display = "none";
    entryEl.style.display = "none";
    buttonEl.style.display = "none";
}

//Correct Answers: q1c, q2c, q3d, q4c, q5d
//Answer Variables
var answer1 = document.querySelector("#q1C");
var answer2 = document.querySelector("#q2C");
var answer3 = document.querySelector("#q3D");
var answer4 = document.querySelector("#q4C");
var answer5 = document.querySelector("#q5D");
var incorrect1 = document.querySelectorAll("#q1A, #q1B, #q1D");
var incorrect2 = document.querySelectorAll("#q2A, #q2B, #q2D");
var incorrect3 = document.querySelectorAll("#q3A, #q3B, #q3C");
var incorrect4 = document.querySelectorAll("#q4A, #q4B, #q4D");
var incorrect5 = document.querySelectorAll("#q5A, #q5B, #q5C");


//Answer Event Listeners & Functions
answer1.addEventListener("click", nextQuestion2Correct);

incorrect1[0].addEventListener("click", deductTime);
incorrect1[0].addEventListener("click", nextQuestion2);
incorrect1[1].addEventListener("click", deductTime);
incorrect1[1].addEventListener("click", nextQuestion2);
incorrect1[2].addEventListener("click", deductTime);
incorrect1[2].addEventListener("click", nextQuestion2);


answer2.addEventListener("click", nextQuestion3Correct);

incorrect2[0].addEventListener("click", deductTime);
incorrect2[0].addEventListener("click", nextQuestion3);
incorrect2[1].addEventListener("click", deductTime);
incorrect2[1].addEventListener("click", nextQuestion3);
incorrect2[2].addEventListener("click", deductTime);
incorrect2[2].addEventListener("click", nextQuestion3);


answer3.addEventListener("click", nextQuestion4Correct);

incorrect3[0].addEventListener("click", deductTime);
incorrect3[0].addEventListener("click", nextQuestion4);
incorrect3[1].addEventListener("click", deductTime);
incorrect3[1].addEventListener("click", nextQuestion4);
incorrect3[2].addEventListener("click", deductTime);
incorrect3[2].addEventListener("click", nextQuestion4);


answer4.addEventListener("click", nextQuestion5Correct);

incorrect4[0].addEventListener("click", deductTime);
incorrect4[0].addEventListener("click", nextQuestion5);
incorrect4[1].addEventListener("click", deductTime);
incorrect4[1].addEventListener("click", nextQuestion5);
incorrect4[2].addEventListener("click", deductTime);
incorrect4[2].addEventListener("click", nextQuestion5);


answer5.addEventListener("click", hideFinal);
answer5.addEventListener("click", sendMessageCorrect);

incorrect5[0].addEventListener("click", deductTime);
incorrect5[0].addEventListener("click", hideFinal);
incorrect5[0].addEventListener("click", sendMessage);
incorrect5[1].addEventListener("click", deductTime);
incorrect5[1].addEventListener("click", hideFinal);
incorrect5[1].addEventListener("click", sendMessage);
incorrect5[2].addEventListener("click", deductTime);
incorrect5[2].addEventListener("click", hideFinal);
incorrect5[2].addEventListener("click", sendMessage);

//Local Storage

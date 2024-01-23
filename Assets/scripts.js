var questionText = document.getElementById("question");
var boxOneText = document.getElementById("box-1-text");
var boxTwoText = document.getElementById("box-2-text");
var boxThreeText = document.getElementById("box-3-text");
var boxFourText = document.getElementById("box-4-text");
var boxOne = document.getElementById("box-1");
var boxTwo = document.getElementById("box-2");
var boxThree = document.getElementById("box-3");
var boxFour = document.getElementById("box-4");
var buttons = document.querySelectorAll('.button');
var buttonContainer= document.getElementById('buttton-box');
var containerOne = document.getElementById('container-one');
var containerTwo = document.getElementById('container-two');
var containerThree = document.getElementById('container-three');
var containerFour = document.getElementById('container-four');
var timer = document.getElementById('timer');
var start = document.getElementById("start-button");
var scoreText = document.getElementById('score');
var numberCorrectText =document.getElementById('number-correct');
var questionNumber = 0;

console.log(buttons);
containerThree.style.display = "none";
containerFour.style.display = 'none';



var questionOne = {
    question : "Arrays in javascript cannot be used to store _____",
    answerOne : "functions",
    answerTwo : "numbers",
    answerThree : "strings",
    answerFour : 'objects'
}
var questionTwo = {
    question : "a string can be is made of _____",
    answerOne : "numbers",
    answerTwo : "letters",
    answerThree : "special characters",
    answerFour : 'all of the above'
}
var questionThree = {
    question : "String values must be enclosed with _____",
    answerOne : "parenthesis",
    answerTwo : "quotation marks",
    answerThree : "curly brakcets",
    answerFour : 'brackets'
}
var questionFour = {
    question : "src is used in the script element to _____",
    answerOne : "hide the file",
    answerTwo : "delete the file",
    answerThree : "Link the file",
    answerFour : 'none of the above'
}
var questionFive = {
    question : 'GAME OVER',
    answerOne : null,
    answerTwo : null,
    answerThree : null,
    answerFour : null
}


var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var correctAnswers = [questionOne.answerOne, questionTwo.answerFour, 
                    questionThree.answerTwo, questionFour.answerThree];




questionText.textContent = "Click start at the top to play!";
timer.textContent = null;



start.addEventListener("click", gameFunction);

function gameFunction() {
    var timeLeft = 60000;
    var timeText = timeLeft/1000;
    var score = 0;
    var numberCorrect = 0;
    questionNumber = 0;
    start.style.display = "none";
    nextQuestion();
   
    var gameTime = setInterval(function(){
        timeLeft -= 1000;
        timeText = timeLeft / 1000;
        timer.textContent = timeText + " seconds";
        if (timeLeft <= 0){
            clearInterval(gameTime);
            questionNumber = 4; 
            timer.textContent = "GAME OVER";
            gameOver();
        }else if (questionNumber === 5){
            clearInterval(gameTime);
            timer.textContent = "GAME OVER";
            gameOver();
        } 

        }, 1000) 
    

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            var buttonText = this.querySelector('h3').textContent;

            if (correctAnswers.includes(buttonText)) {
                score += 10;
                numberCorrect ++;
                scoreText.textContent = "Score: " + score;
                numberCorrectText.textContent = "Number Correct: " + numberCorrect;
            }else {
                if (timeLeft <= 15){
                    timeLeft = 0;
                    timer.textContent = 'GAME OVER';
                    return;
                }else {
                    timeLeft -= 20000;
                }
            }

            nextQuestion();

        })
    });
    

    
    
}

function nextQuestion(){
    var nextQuestion = questionArray[questionNumber];
    questionText.textContent = nextQuestion.question;
    boxOneText.textContent = nextQuestion.answerOne;
    boxTwoText.textContent = nextQuestion.answerTwo;
    boxThreeText.textContent = nextQuestion.answerThree;
    boxFourText.textContent = nextQuestion.answerFour;
    questionNumber ++;
    return;
}

function gameOver(){
    containerOne.style.display = 'none';
    containerTwo.style.display = 'none';
    containerThree.style.display = 'flex';
    containerFour.style.display = 'flex';
    return;
}
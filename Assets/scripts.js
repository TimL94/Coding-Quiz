var questionText = document.getElementById("question");
var boxOneText = document.getElementById("box-1-text");
var boxTwoText = document.getElementById("box-2-text");
var boxThreeText = document.getElementById("box-3-text");
var boxFourText = document.getElementById("box-4-text");
var boxOne = document.getElementById("box-1");
var boxTwo = document.getElementById("box-2");
var boxThree = document.getElementById("box-3");
var boxFour = document.getElementById("box-4");
var buttons = document.getElementsByClassName("option-box");
var buttonBox = document.getElementById("button-box");
var timer = document.getElementById('timer');
var start = document.getElementById("start-button");
var questionNumber = 0;

var questionOne = {
    question : "Arrays in javascript cannot be used to store _____",
    ansewerOne : "functions",
    answerTwo : "numbers",
    answerThree : "strings",
    answerFour : 'objects'
}
var questionTwo = {
    question : "a string can be is made of _____",
    ansewerOne : "numbers",
    answerTwo : "letters",
    answerThree : "special characters",
    answerFour : 'all of the above'
}
var questionThree = {
    question : "String values must be enclosed with _____",
    ansewerOne : "parenthesis",
    answerTwo : "quotation marks",
    answerThree : "curly brakcets",
    answerFour : 'brackets'
}
var questionFour = {
    question : "src is used in the script element to _____",
    ansewerOne : "hide the file",
    answerTwo : "delete the file",
    answerThree : "Link the file",
    answerFour : 'none of the above'
}
var questionFive = {
    question : 'GAME OVER',
    ansewerOne : null,
    answerTwo : null,
    answerThree : null,
    answerFour : null
}


var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var correctAnswers = [questionOne.answerFour, questionTwo.answerFour, 
                    questionThree.answerTwo, questionFour.answerThree];




questionText.textContent = "Click start at the top to play!";



start.addEventListener("click", gameFunction);

function gameFunction() {
    
    nextQuestion(questionNumber);

    boxOne.addEventListener('click', nextQuestion);
    boxTwo.addEventListener('click', nextQuestion);
    boxThree.addEventListener('click', nextQuestion);
    boxFour.addEventListener('click', nextQuestion);

    if (questionNumber === null){
        return;
    }

    

    
}

function nextQuestion(num){
    if (questionNumber === 5){
        questionNumber = null;
        return;
    }

    
    var nextQuestion = questionArray[questionNumber];
    console.log(nextQuestion);
    questionText.textContent = nextQuestion.question;
    boxOneText.textContent = nextQuestion.ansewerOne;
    boxTwoText.textContent = nextQuestion.answerTwo;
    boxThreeText.textContent = nextQuestion.answerThree;
    boxFourText.textContent = nextQuestion.answerFour;
    questionNumber ++;
    return;
}

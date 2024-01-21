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
var timer = document.getElementById('timer');
var start = document.getElementById("start-button");
var questionNumber = 0;

console.log(buttons);



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
    ansewerOne : null,
    answerTwo : null,
    answerThree : null,
    answerFour : null
}


var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var correctAnswers = [questionOne.answerOne, questionTwo.answerFour, 
                    questionThree.answerOne, questionFour.answerThree];




questionText.textContent = "Click start at the top to play!";



start.addEventListener("click", gameFunction);

function gameFunction() {
    var timeLeft = 60000;
    var timeText = timeLeft/1000;
    questionNumber = 0;
    nextQuestion(questionNumber);
    /*
    start.textContent = 'CANCEL';
    start.addEventListener('click', function(){
        questionText.textContent = "Click start at the top to play!";
        boxOneText.textContent = null;
        boxTwoText.textContent = null;
        boxThreeText.textContent = null;
        boxFourText.textContent = null;
        start.textContent = 'Start';
        questionNumber = 0;
        return;
    })
    */
    
    var gameTime = setInterval(function(){
        timeLeft -= 1000;
        timeText = timeLeft / 1000;
        timer.textContent = timeText + " seconds";
        if (timeLeft === 0){
            clearInterval(gameTime); 
            nextQuestion(4);
        }
        buttons.forEach(i =>{
            i.addEventListener('click', (e) =>{
                if (correctAnswers.includes(e.target.textContent)){
                    console.log(e.target.textContent);
                }else{
                    timeLeft -= 15000;
                }
                nextQuestion();
                
                var delayInterval = 1000;
        
                var delay= setInterval(function(){
                    if (delayInterval === 0){
                        clearInterval(delay);
                    }
                    delayInterval -= 1000;
                }, 1000)
            });
            })
            if (timeLeft === 0 || timeLeft < 0){
                clearInterval(gameTime); 
                nextQuestion(4);
            }
    }, 1000)
    

    /*
    boxOne.addEventListener('click', nextQuestion);
    boxTwo.addEventListener('click', nextQuestion);
    boxThree.addEventListener('click', nextQuestion);
    boxFour.addEventListener('click', nextQuestion);
    */
    

   
    

    if (questionNumber === null){
        questionNumber = 0;
        timeLeft = 0;
        return;
    }
    
}

function nextQuestion(num){
    num = questionNumber;
    if (num === 5){
        questionNumber = null;
        timeLeft = 0;
        return;
    }

    
    var nextQuestion = questionArray[questionNumber];
    questionText.textContent = nextQuestion.question;
    boxOneText.textContent = nextQuestion.answerOne;
    boxTwoText.textContent = nextQuestion.answerTwo;
    boxThreeText.textContent = nextQuestion.answerThree;
    boxFourText.textContent = nextQuestion.answerFour;
    questionNumber ++;
    return;
}

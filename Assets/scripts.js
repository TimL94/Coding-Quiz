
// the following variable ddeclarations are seprated into groups that are similar to each other to help with organization

// This section pulls the ID's for the  card which contains the questions and answer elements and assigns them to variables
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

// This section pulls the ID's for each container and assigns them to a unique variable
var containerOne = document.getElementById('container-one');
var containerTwo = document.getElementById('container-two');
var containerThree = document.getElementById('container-three');
var containerFour = document.getElementById('container-four');
var containerFive = document.getElementById('container-five');

// more elements are pulled by ID here and assigned to their own variables, these are primarily the buttons
var timer = document.getElementById('timer');
var start = document.getElementById("start-button");
var scoreText = document.getElementById('score');
var numberCorrectText =document.getElementById('number-correct');
var saveScoreButton = document.getElementById('save-score');
var highScore = document.getElementById('high-score');
var initialsInput = document.getElementById('initials-input');
var restartButton = document.getElementById('restart-button');
var saveInitialsButton = document.getElementById('initials-button');


// these variables set the global values for key game mechanics
var questionNumber = 0;
var score = 0;
var numberCorrect = 0;
var timeLeft = 60000;
var timeText = timeLeft/1000;

// this section hides end game containers and pulls the stored high score initials and score
containerThree.style.display = "none";
containerFour.style.display = 'none';
containerFive.style.display = 'none';
highScore.textContent = "player: " + localStorage.getItem('initials') + ' | score: ' + localStorage.getItem('score');


// this section creates 5 objects all but the last containing a question and 4 options
var questionOne = {
    question : "____ is an intger value",
    answerOne : "4",
    answerTwo : "four",
    answerThree : "'4'",
    answerFour : 'none of the above'
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

// this section creates an array that contains each question for easier access, 
//and an array which contains each correct answer for checking against user input as the game is played
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var correctAnswers = [questionOne.answerOne, questionTwo.answerFour, 
                    questionThree.answerTwo, questionFour.answerThree];



// this section sets the intital text to prompt the user to start the game
questionText.textContent = "Click start at the top to play!";
timer.textContent = '60 seconds';


//this event listener waits for the user to click the start button and once this occurs starts the game
start.addEventListener("click",gameFunction);

// this records user highs score and initials and resets the game
saveScoreButton.addEventListener('click', function(){
    saveScore();
});

// this resets the game
restartButton.addEventListener('click', restartGame);

function gameFunction() {

    // question number is used to iterate through the question array and the next question function is called to pull question 1
    questionNumber = 0;
    start.style.display = "none";
    nextQuestion();
   
    //this starts the game timer and has logic to end the game when either the timer reaches 0 or there is no more questioins to answer
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
    
    // this section takes the array containing all of the buttons and sets up an event listener
    // once a button is pressed its text content is checked against the correct answers array

    // if correct 10 points is added to score, number correct is incremented, and end game text is updated
    // if incorrect 20 seconds is subtracted from the time

    // nextquestion is than called and the game progresses
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

// this function uses the variable question number to pull the next question from the question array and updates the matching elements
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

// this function hides the game play comntainers and displays the endgame containers
function gameOver(){
    containerOne.style.display = 'none';
    containerTwo.style.display = 'none';
    containerThree.style.display = 'flex';
    containerFour.style.display = 'flex';
    return;
}

// this functions hides the end game containers and displays the save highscore containers
// user input is checked to make sure that is between 1 and 3 characters in length
// the game is than reset
function saveScore(){
    containerThree.style.display = "none";
    containerFive.style.display = "flex";
    containerFive.style.justifyContent= 'center';
    containerFive.style.alignItems ='center';
    localStorage.setItem("score", score);

    saveInitialsButton.addEventListener('click', function(){
        var initials = initialsInput.value;
        console.log(initials.lengthj);
        if (initials.length <= 3 && initials.length > 0){
            localStorage.setItem('initials', initials);
            window.alert('High Score Saved');
            location.reload();
        } else {
            window.alert("entry must be between 1 and 3 characters");
            return;
        }
        
    })
    return;
}

// this function simply resets the game
function restartGame(){
    location.reload();
}
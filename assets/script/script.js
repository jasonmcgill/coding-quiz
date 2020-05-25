var timerEl = document.getElementById("time");
var bodyEl = document.getElementById("main");
var waitingForAnswer = false;
var timeLeft = 0;

var singleAnswerChosen = false;

var currentQuestion = 0; 
var timeInterval = 0   

//object for questions
var questionArray = [
    {
        //question string
        question: "Commonly used data types DO NOT include:",
        //answer string array
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        //correct index of answer string array  
        correct: 2
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correct: 2
    },
    {
        question: "Array in JavaScript can be used to store",
        answers: ["1 numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correct: 3
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables",
        answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correct: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correct: 3
    }

]

//startTimer function
var timer = function() {
    timeInterval = setInterval(function () {
        //every second decrease timer
        timeLeft--;
        //update timer element
        timerEl.textContent = timeLeft;
        //when timer has 0 
        if (timeLeft <= -1) {
            timerEl.textContent = "Times Up!";
            timeLeft = 0;
        endGame() 
        }
    }, 1000);
};        
        

//displayBeginning function
var displayBeginning = function() {
    bodyEl.innerHTML = "";
    //generates "Welcome to my coding quiz challenge!" 
    var welcomeEl = document.createElement("h1");
    welcomeEl.textContent = "Welcome to my coding quiz challenge!"
    welcomeEl.className = "question"
    
    bodyEl.appendChild(welcomeEl);

    //generate "instructions" element
    var instructions = document.createElement("p");
    instructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    instructions.className = "instructions";

    bodyEl.appendChild(instructions);
    //generate button that calls startGame()    
    var startQuiz = document.createElement("button");
    startQuiz.textContent = "Start Quiz!";
    startQuiz.className = "button";

    startQuiz.addEventListener("click", startGame);
    bodyEl.appendChild(startQuiz);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function startGame() {
    //adds time to timer
    timeLeft = 76;
    //calls startTimer()
    timer();
    //for loop that runs through question array.length
    for (var i=0; i < questionArray.length; i++){
         //call displayNewQuestion(question array[i])
         displayNewQuestion(questionArray[i]);
        //set waitingForAnswer to be true
         waitingForAnswer = true;
         //wait for waitingForAnswer to be false in while loop
         while (waitingForAnswer) {
            await sleep(1000);
         }
    
    }   
    //when for loop is finished calls endGame()
    endGame()
};
    




//displays a new question
var displayNewQuestion = function(questionObj) {
    bodyEl.innerHTML = "";
    //generate question element
    var questionEl = document.createElement("h1");
    questionEl.textContent = questionObj.question;
    questionEl.className = "question"
    
    bodyEl.appendChild(questionEl);

    //generate ul for answer buttons
    var answerContainer = document.createElement("ul");
 
    
    bodyEl.appendChild(answerContainer);
    
    //generate li answer buttons   
    for (var answer = 0; answer < questionObj.answers.length; answer++) {
        var answerButtons = document.createElement("li");
        answerButtons.textContent = questionObj.answers[answer];
        answerButtons.className = "button";
        answerButtons.addEventListener("click", chooseAnswer.bind(null,questionObj, answer));
        
    answerContainer.appendChild(answerButtons);
    }
    
    
    //makes it so you can only select 1 answer
    singleAnswerChosen = false;
    
}


var nextQuestion = function() {
    waitingForAnswer = false;
}



//displayHighScoreEntry function
var displayHighScoreEntry = function() {
    bodyEl.innerHTML = "";
    //displays All Done! element
    var allDoneEl = document.createElement("h1");
    allDoneEl.textContent = "All Done!";
    allDoneEl.className = "question"

    bodyEl.appendChild(allDoneEl);

  
    //displays "your final score is '' "
   var finalScoreEl = document.createElement("p");
   finalScoreEl.textContent = "Your final score is " + timeLeft + "!";
   finalScoreEl.className = "instructions";

   bodyEl.appendChild(finalScoreEl);
    
    //div box for form information
    var formContainerEl = document.createElement("div");
    formContainerEl.className = "form-container"

    bodyEl.appendChild(formContainerEl);
    
         
    //displays instructions for form
    var enterInitialsEl = document.createElement("p");
    enterInitialsEl.textContent = "Enter initials to save your high score!";
    enterInitialsEl.className = "instructions";

    formContainerEl.appendChild(enterInitialsEl);

     //displays form for initials with submit
    var initialsFormEl = document.createElement("INPUT");
    initialsFormEl.setAttribute("placeholder", "initials");
    initialsFormEl.className = "form-input"; 

    formContainerEl.appendChild(initialsFormEl);

    //displays submit button
    var submitButtonEl = document.createElement("button");
    submitButtonEl.textContent = "submit";
    submitButtonEl.className = "submit-button";

    formContainerEl.appendChild(submitButtonEl);

    //submit form calls highScoreSubmit function ( initials + timer)
    submitButtonEl.addEventListener("click", highScoreSubmit)

    formContainerEl.appendChild(submitButtonEl);

}





var chooseAnswer = function(questionObj, answer) {
    if (singleAnswerChosen === false) {
        //check if question object selected correct index
        var isCorrect = (questionObj.correct === answer); 
        //if incorrect timer -10
        if (isCorrect === false) {
            timeLeft = timeLeft -10;
        }
        //calls displayAfterAnswer( whether it was correct)
        displayAfterAnswer(isCorrect);
        singleAnswerChosen = true;
    }
}


var displayAfterAnswer = function (isCorrect) {
    //generate right or wrong element from input
    if (isCorrect) {
        var correctEl = document.createElement("h2");
        correctEl.textContent = "Correct!";
        correctEl.className = "after-answer-display"
        
        bodyEl.appendChild(correctEl);
    }
    else {
        var wrongEl = document.createElement("h2");
        wrongEl.textContent = "Wrong!";
        wrongEl.className = "after-answer-display";
        
        bodyEl.appendChild(wrongEl);
    }
    
    
    //start timer to move on to nextQuestion()
    setTimeout(nextQuestion, 2000);
}


//displayHighScoreList function
    //generate High Scores element
    //get list from local.storage
    //generate element for each item in local.storage
    //generate button for (startGame)
    //generate clear high scores button (clearHighScores)

//highScoreSubmit function
    //inputs initials + timer
    //set local.storage with inputs
    //calls displayHighScoreList

//clearHighScores function
    //prompt "are you sure?"
    //clear local.storage if prompt (true) and alert "scores cleared"



var endGame = function() {
    clearInterval(timeInterval);
    displayHighScoreEntry();
    
}    


displayBeginning();

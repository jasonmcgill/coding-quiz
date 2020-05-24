var timerEl = document.getElementById("time");
var bodyEl = document.getElementById("main");
var waitingForAnswer = false;
var timeLeft = 76;
   
    

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
var timeInterval = setInterval(function () {
    //every second decrease timer
    timeLeft--;
    //update timer element
    timerEl.textContent = timeLeft + " seconds remaining";
    //when timer has 0 
    if (timeLeft === -1) {
        timerEl.textContent = "Times Up!";
        clearInterval(timeInterval);
    // call endGame() TO DOO!!!!!!
    }
}, 1000);
};        
        

//displayBeginning function
var displayBeginning = function() {
    
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

var startGame = function() {
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

         }
    
    }   
    //when for loop is finished calls endGame()
    endGame()
};
    



displayBeginning();

//displayNewQuestion function
    //inputs = question object
    //generate question element
    //generate ul element
    //generate 4 li elements
    //make all li elements clickable and call chooseAnswer(question object, [i])

//displayAfterAnswer function
    //input = is correct boolean
    //generate right or wrong element from input
    //start timer to move on to nextQuestion()

//nextQuestion function
    //change waitingForAnswer to false

//displayHighScoreEntry function
    //displays All Done! element
    //displays "Your Final Score is (timer)"    
    //displays form for initials with submit
    //submit form calls highScoreSubmit function ( initials + timer)

//displayHighScoreList function
    //generate High Scores element
    //get list from local.storage
    //generate element for each item in local.storage
    //generate button for (startGame)
    //generate clear high scores button (clearHighScores)


    
//endGame function
    //calls displayHighScoreEntry()

//chooseAnswer function
    //inputs = question object , answer [i]
    //check if question object selected correct index
    //if incorrect timer -10
    //calls displayAfterAnswer( whether it was correct)

//highScoreSubmit function
    //inputs initials + timer
    //set local.storage with inputs
    //calls displayHighScoreList

//clearHighScores function
    //prompt "are you sure?"
    //clear local.storage if prompt (true) and alert "scores cleared"


var timerEl = document.getElementById("time");
var bodyEl = document.getElementById("main");
var waitingForAnswer = false;
//startTimer function
var timeLeft = 76;

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

    }
    
    //call displayNewQuestion(question array[i])
    //set waitingForAnswer to be true
    //wait for waitingForAnswer to be false in while loop
    //when for loop is finished calls endGame()
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

//object for questions
    //question string
    //answer string array
    //correct index of answer string array
//startTimer function
    //start timer that does
        //every second decrease timer
        //update timer element
        //if timer === 0 then endGame()

//displayBeginning function
    //generate "Coding Quiz Challenge" element
    //generate "instructions" element
    //generate button to startGame()

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
    //TO DO

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

//startGame function
    //calls startTimer()
    //for loop that runs through question array.length
        //call displayNewQuestion(question array[i])
        // wait for next question TO DO!!!
    //when loop is finished calls endGame()

    
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
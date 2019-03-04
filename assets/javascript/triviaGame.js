timeLeft = 15;

// start counting when the user clicks Start
function start() {
    // Call count() every 1 second
    setInterval(count, 1000);

    // Hide the overlay with the Start button
    //document.getElementById("overlay").style.display = "none";
    $("#overlay").hide();

}


// Each 1 second, do:
function count() {

    // Decrement timeLeft by 1
    timeLeft--;

    // If there's still time left, do:
    if (timeLeft > 0) {
        $("#timeLeft").text("Time Remaining: " + timeLeft + "s");
    }

    // at the end, do:
    if (timeLeft == 0) {
        $("#timeLeft").text("Time Remaining: 0s");
        endGame();
    }

    // Otherwise, do nothing
}

// The <input/> that says 'correct' has the rigth answer.
function radio1(value){
    if (value == "correct") {
        answers[0] = "correct"
    } else {
        answers[0] = "incorrect";
    }

    // Check if other questions have been answered.
    if (answers[1] != "unselected" && answers[2] == "unselected") {
        endGame();
    }
}

// The <input/> that says 'correct' has the rigth answer.
function radio2(value){
    if (value == "correct") {
        answers[1] = "correct"
    } else {
        answers[1] = "incorrect";
    }

    // Check if other questions have been answered.
    if (answers[0] != "unselected" && answers[2] != "unselected") {
        endGame();
    }
}

// The <input/> that says 'correct' has the rigth answer.
function radio3(value){
    if (value == "correct") {
        answers[2] = "correct"
    } else {
        answers[2] = "incorrect";
    }

    // Check if other questions have been answered.
    if (answers[0] != "unselected" && answers[1] != "unselected") {
        endGame();
    }
}

// by default, they're not selected.
// answers will be saved here.
var answers = ["unselected", "unselected", "unselected"];

function endGame(){
    
    // counters
    var correct = 0;
    var incorrect = 0;
    var unselected = 0;

    // Look for how many there are of each possible answer. 
    for (var i=0; i<3; i++) {
        
        var answer = answers[i];

        if (answer == "correct") {
            correct++;
        } else if (answer == "incorrect") {
            incorrect++;
        } else {
            unselected++;
        }
    }

    // Make results visible
    //document.getElementById("result").style.display = "block";
    $("#result").show();

    // Show results on HTML
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + incorrect);
    $("#unselected").text("Unanswered: " + unselected);
}


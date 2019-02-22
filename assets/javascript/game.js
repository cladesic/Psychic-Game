
//Waits for page to finish loading
$(document).ready(function () {

    //Funcation for reload page to clear out stats 
    $("button").click(function () {
        location.reload(true);

    });

    //Declare variables "Global"    
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
    var wins = 0;
    var lose = 0;
    var guessLeft = 20;
    var totalGames= 0;

    //User key keys listener
    document.onkeyup = function (event) {

        var userGuess = event.key;
        $("#lettersGuessed").append(userGuess);

        var computerGuess = letters[Math.floor(Math.random() * letters.length)];

        // If statement to compare user and computer choices
        if (userGuess === computerGuess) {
            wins++;
            $(".badge-success").text(wins)
            $("#lettersGuessed").empty();
            guessLeft = 20;
            totalGames++;
            $(".badge-info").text(totalGames);
        } else if ((userGuess !== computerGuess) && (guessLeft !== 0)) {
            lose++;
            guessLeft--;
            $(".badge-error").text(lose);
            $(".badge-primary").text(guessLeft);

        } else if (guessLeft === 0) {
            //Clear out letters Guessed, and resets variable to 20 to continue       
            $("#lettersGuessed").empty();
            alert("You lose the game! Click okay to continue to play")
            guessLeft = 20;
            totalGames++;
            $(".badge-info").text(totalGames);
        }
        //Return values to Pillboxes and letters    
        return $("#lettersGuessed", ".badge-success", ".badge-error", ".badge-primary", ".badge-info");

    }

});
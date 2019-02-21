
$(document).ready(function () {
    $("button").click(function(){
        location.reload(true);

    });
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
    var wins = 0;
    var lose = 0;
    var guessLeft = 10;
    

    document.onkeyup = function (event) {

        var userGuess = event.key;
        $("#lettersGuessed").append(userGuess);

        var computerGuess = letters[Math.floor(Math.random() * letters.length)];
        console.log(computerGuess);

        if (userGuess === computerGuess) {
            wins++;
            $(".badge-success").text(wins)
            console.log("You win " + wins);
        } else if ((userGuess !== computerGuess) && (guessLeft !== 0)) {
            lose++;
            guessLeft--;
            $(".badge-error").text(lose);
            $(".badge-primary").text(guessLeft);

            console.log("You lose " + lose + "  " + "Guesses " + guessLeft);
        } else if (guessLeft === 0) {

            console.log("Game Over you lose" + guessLeft);
            alert("You lose the game!")
           

        }
        return $("#lettersGuessed", ".badge-success", ".badge-error", ".badge-primary");

    }

});
//global variables 
var numGuess = Math.floor(Math.random() * 200);
    console.log(numGuess);

var goalNumber = numGuess;
    console.log(goalNumber);

var addedNumbers = 0;
var wins = 0;
var losses = 0;
//var gameTrue = true;

// functions
$(document).ready(function () {
    //if (game == true) {
        //gem clicks
        var blueGem = 4;
        var diamondGem = 9;
        var greenGem = 6;
        var redGem = 2;
        //text
        $(".total").text(addedNumbers);
        $(".winNumber").text(wins);
        $(".loseNumber").text(losses);
        $(".randomNumber").text(goalNumber);

        $(".blueGem").on("click", function() {
            addedNumbers = blueGem + addedNumbers;
            console.log(addedNumbers)
            $(".total").text(addedNumbers);
            winLose();
          });
        $(".diamondGem").on("click", function() {
            addedNumbers = diamondGem + addedNumbers;
            console.log(addedNumbers)
            $(".total").text(addedNumbers);
            winLose();
        });
        $(".greenGem").on("click", function() {
            addedNumbers = diamondGem + addedNumbers;
            console.log(addedNumbers)
            $(".total").text(addedNumbers);
            winLose();
        });
        $(".redGem").on("click", function() {
            addedNumbers = blueGem + addedNumbers;
            console.log(addedNumbers)
            $(".total").text(addedNumbers);
            winLose();
        });
//winlosecon    
        function winLose() {
        if (goalNumber == addedNumbers) {
            $(".instructions").text("YOU WIN!");
        }
        else if (goalNumber < addedNumbers) {
            $(".instructions").text("YOU LOSE!");
            game = false;
        }};
    //}
        

});
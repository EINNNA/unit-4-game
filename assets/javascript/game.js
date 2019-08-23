//global variables 
//var maxCryst = 12;
//var minCryst = 1;
var max = 120;
var min = 19;


var numGuess = Math.floor(Math.random() * (max - min + 1));
    console.log(numGuess);


var goalNumber = numGuess;
    console.log(goalNumber);

var addedNumbers = 0;
var wins = 0;
var losses = 0;
//var game = true;

// functions
$(document).ready(function () {

    var gemRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var blueGem = gemRandom[Math.floor(Math.random() * gemRandom.length)];   
    var diamondGem = gemRandom[Math.floor(Math.random() * gemRandom.length)];
    var greenGem = gemRandom[Math.floor(Math.random() * gemRandom.length)];
    var redGem = gemRandom[Math.floor(Math.random() * gemRandom.length)];

    console.log(blueGem);
    console.log(diamondGem);
    console.log(greenGem);
    console.log(redGem);


        //text
        $(".instructions").text("GET THE SAME AMOUNT OF CRYSTALS.");
        $(".total").text(addedNumbers);
        $(".winNumber").text(wins);
        $(".loseNumber").text(losses);
        $(".randomNumber").text(goalNumber);

        //gem adding
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
        if (addedNumbers == goalNumber) {
            $(".instructions").text("YOU WIN!");
            //$(".randomNumber", ".total", ".instructions").empty();
            wins++;
            winNumber = 0;
            loseNumber = 0;
            total = 0;
            goalNumber = numGuess;
        }
        else if (goalNumber < addedNumbers) {
            $(".instructions").text("YOU LOSE!");
            losses--;
            winNumber = 0;
            loseNumber = 0;
            total = 0;
            goalNumber = numGuess;
        }};

        /*$(".hide").on("click", function(){
            $("div").removeClass(".hide");
            $(".winNumber, .loseNumber, .total, randomNumber").empty();
            winNumber = 0;
            loseNumber = 0;
            total = 0;
            randomNumber = goalNumber;
        });*/       
});   

//global variables 

/*this is not re-randomising
var numGuess = Math.floor(Math.random() * (max - min + 1));
    console.log(numGuess);*/

var numGuess = getGoal();
    console.log(numGuess);

var goalNumber = numGuess;
    console.log(goalNumber);

var addedNumbers = 0;
var wins = 0;
var losses = 0;

var minCrystal = 1; 
var maxCrystal = 12;
var checker = [];

// functions
$(document).ready(function () {
    
    clear();

    //var gemRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    var blueGem = generateNumber()
    //gemRandom[Math.floor(Math.random() * gemRandom.length)];   
    var diamondGem = generateNumber()
    //gemRandom[Math.floor(Math.random() * gemRandom.length)];
    var greenGem = generateNumber()
    //gemRandom[Math.floor(Math.random() * gemRandom.length)];
    var redGem = generateNumber()
    //gemRandom[Math.floor(Math.random() * gemRandom.length)];

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
});   


//winlosecon    
function winLose() {
    if (addedNumbers == goalNumber) {
        $(".winNotice").text("YOU WIN!");
        wins++;
        //$(".randomNumber", ".total", ".instructions").empty();
        $(".winNumber").text(wins);
        randoRando();
        clear();
    }
    else if (goalNumber < addedNumbers) {
        $(".instructions").text("YOU LOSE!");
        losses++;
        $(".loseNumber").text(losses);
        //$(".randomNumber", ".total", ".instructions").empty();
        randoRando();
        clear();
    }};     

    function clear() {
        addedNumbers = 0;
        total = 0;
        $(".total").text(addedNumbers);
        $(".instructions").text("GET THE SAME AMOUNT OF CRYSTALS.");
        $(".winNotice").text(" ");
    }; 

    function getGoal() {
        var max = 120;
        var min = 19;

        var goalNumber = Math.floor(Math.random() * max) + min;
        return goalNumber;
    };

    function generateNumber() {
        var random = Math.random() * (+maxCrystal - +minCrystal) + +minCrystal; 
        var number = Math.round(random);
        console.log(checker.includes(number), number, checker);
      
        if(checker.includes(number) == false) {
            checker.push(number);
            return number;
            console.log(number);
        } 
        else {
            return generateNumber();
        }
    };

    function randoRando() {
        $(".blueGem, .diamondGem, .redGem, .greenGem, .randomNumber").empty();
        goalNumber = getGoal();
        $(".randomNumber").text(goalNumber);
        blueGem = generateNumber();
        //gemRandom[Math.floor(Math.random() * gemRandom.length)];   
        diamondGem = generateNumber();
        //gemRandom[Math.floor(Math.random() * gemRandom.length)]; 
        greenGem = generateNumber();
        //gemRandom[Math.floor(Math.random() * gemRandom.length)]; 
        redGem = generateNumber();
        //gemRandom[Math.floor(Math.random() * gemRandom.length)]; 
        
    };

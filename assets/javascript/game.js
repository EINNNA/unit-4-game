var goalNumber = 0;

var addedNumbers = 0;
var wins = 0;
var losses = 0;

var minCrystal = 1; 
var maxCrystal = 12;
var checker = [];

// functions
$(document).ready(function () {
    clear();
    getGoal();

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
        //$(".winNotice").text("YOU WIN!");
        wins++;
        //$(".randomNumber", ".total", ".instructions").empty();
        $(".winNumber").text(wins);
        randoRando();
        clear();
    }
    else if (goalNumber < addedNumbers) {
        //$(".instructions").text("YOU LOSE!");
        losses++;
        $(".loseNumber").text(losses);
        //$(".randomNumber", ".total", ".instructions").empty();
        randoRando();
        clear();
    }};     

    function clear() {
        checker = [];
        addedNumbers = 0;
        total = 0;
        blueGem = generateNumber(); 
        diamondGem = generateNumber();
        greenGem = generateNumber();
        redGem = generateNumber();
        $(".total").text(addedNumbers);
        $(".instructions").text("GET THE SAME AMOUNT OF CRYSTALS.");
        //$(".winNotice").text(" ");
    }; 

    function getGoal() {
        var min = 19;
        var max = 120 - min;
        var goal = Math.floor(Math.random() * max)+ min + 1;

        goalNumber = goal;
        
        $(".randomNumber").text(goal);
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
        clear()
        getGoal()
    };

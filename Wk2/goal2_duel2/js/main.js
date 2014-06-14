/*
Name: Nicholas Shashaguay
Date: 06/13/2014
Assignment: Goal2: Assignment: Duel2
Note: Changed the names of the fighters who are on the screen
 */

// self executing function
(function(){

    console.log("FIGHT!!!");

    //players name, damage, and health in a array format
    var playerOneName = ["Kabal", 20, 100];
    var playerTwoName = ["Kratos", 20, 100];










    //round of fight
    var round = 0;


    //fight function
function fight(){
        console.log("in the fight function");

        //alert to show the players names and their health at the start of the program
        alert(playerOneName+":"+playerOneHealth+" START "+playerTwoName+":"+playerTwoHealth);

        // if "i" is less than 10, then the code will go here
        for(var i=0; i < 10; i++){

            // random number formula
            //Math.floor(Math.random() * (max - min) + min);

            //min damage for both players

            var minDamage1 = player1Damage * .5;
            var minDamage2 =  player2Damage * .5;

            // this will create random numbers for each round for min damage
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);


            // damage inflicted
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            // health log for both players
            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

            var results = winnerCheck();
            console.log(results);
            if (results === "No Winner"){
                round ++;
                alert(playerOneName+":"+playerOneHealth+" ROUND "+round+" Over "+playerTwoName+":"+playerTwoHealth);
            }else{
               alert(results);
                break; //the break will go out of the for loop and exit
            };


        };
    };

    // winner check function
    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result="No Winner";

        if(playerOneHealth<1 && playerTwoHealth<1){

            result = "You Both Die!";
        } else if(playerOneHealth<1){

            result =playerTwoName+" WINS!"
        } else if(playerTwoHealth<1){

            result =playerOneName+" WINS!"
        };

        return result;

    };

        // fight call. this will execute the fight function
        //console.log("program starts");
        fight();

})();


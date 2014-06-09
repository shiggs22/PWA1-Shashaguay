/*
Name: Nicholas Shashaguay
Date: 06/08/2014
Assignment: Goal1: Assignment: Duel1
 */

// self executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //round of fight
    var round = 1;


    //fight function
function fight(){
        console.log("in the fight function");

        alert(playerOneName+":"+playerOneHealth+" START "+playerTwoName+":"+playerTwoHealth);

        // if "i" is less than 10, then the code will go here
        for(var i=0; i < 10; i++){

            // random number formula
            Math.floor(Math.random() * (max - min) + min);

            //min damage for both players

            var minDamage1 = player1Damage * .5;
            var minDamage2 =  player2Damage * .5;

            // this will create random numbers for each round for min damage
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);


        };
    };

    // winner check function
    function winnerCheck(){
        //winner check code will go here
        winnerCheck()
    };

        // fight call. this will execute the fight function
        console.log("program starts");
        fight();

})();


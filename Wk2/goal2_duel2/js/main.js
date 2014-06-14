/*
Name: Nicholas Shashaguay
Date: 06/13/2014
Assignment: Goal2: Assignment: Duel2
Note: Changed the names of the fighters who are on the screen
 */

// this function is for the players name, damage, and health
(function() {

    console.log("FIGHT!!!");

    //players name, damage, and health in a array format
    var fighter1 = ["Kabal", 20, 100];
    var fighter2 = ["Kratos", 20, 100];

    //global variable for the rounds of the fight
    var round = 0;



    //this area holds the function for the fight. figuring out the damage left in each round
function fight(){
        console.log("FIGHT!!!");

        //alert to show the players names and their health at the start of the program using array elements
        alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);

        // for loop for the rounds the cycle through 10 times.
        for(var i=0; i < 10; i++){

            // random number formula
            //Math.floor(Math.random() * (max - min) + min);

            //this holds the var for the minimum damage for each fight

            var minDamage1 = fighter1[1] * .5;
            var minDamage2 =  fighter2[1] * .5;

            // this will create random numbers for each round for min damage
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);


            //this area is for the fighters math on the health vs the damage they each take
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            //this shows in the console log the name and health of the fighters with how much health they have left and also to check for a winner or no winner.
            console.log(fighter1[0]+":"+fighter2[2]+" "+fighter2[0]+":"+fighter2[2]);

            var results = winnerCheck();
            console.log(results);
            if (results === "No Winner"){
                round ++;
                alert(fighter1[0]+":"+fighter1[2]+" ROUND "+round+" Over "+fighter2[0]+":"+fighter2[2]);
            }else{
               alert(results);
                break; //the break will go out of the for loop and exit
            };


        };
    };

    // this function does a call out for when a fighter dies, wins, or both die. this is an alert.
    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result="No Winner";

        if(fighter1[2]<1 && fighter2[2]<1){

            result = "You Both Die!";
        } else if(fighter1[2]<1){

            result =fighter2[0]+" WINS!"
        } else if(fighter2[2]<1){

            result =fighter[0]+" WINS!"
        };

        return result;

    };

        // fight call. this will execute the fight function
        //console.log("program starts");
        fight();

})();


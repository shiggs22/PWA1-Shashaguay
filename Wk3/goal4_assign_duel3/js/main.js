/*
 Name: Nicholas Shashaguay
 Date: 06/20/2014
 Assignment: Goal4: Assignment: Duel3
 Note: Changed the names of the fighters who are on the screen
 */



//alert("test")
// This function holds all the information for the entire fight
(function() {
    console.log("FIGHT!");

    var fighter1_txt = document.querySelector("#kabal").querySelector("p"); //this ID is kabal
    var fighter2_txt = document.querySelector("#kratos").querySelector("p");//this ID is for kratos
    var round_txt = document.querySelector("h4"); // this h4 is for the click to start text
    var button = document.getElementById("fight_btn");// fight_btn is the button ID


    button.addEventListener("click", fight, false);// this  makes the button a continued click-able event

//this array holds the information for the fighters
    var fighters = [

        {
            name: "Kabal",
            damage: 20,
            health: 100

        },
        {
            name: "Kratos",
            damage: 20,
            health: 100

        }
    ];

    // this section will display the names of the fighters and their health after each round
    var round = 1;

    round_txt.innerHTML = "Click FIGHT to start!";
    fighter1_txt.innerText = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerText = fighters[1].name + ":" + fighters[1].health;


function fight(){

    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);//this is the formula for random damage results
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);//this is the formula for random damage results

        fighters[0].health -=f1;
        fighters[1].health -=f2;

        console.log(fighters[0].health, fighters[1].health);

    var result = winnerCheck();
    console.log(result);

    //this else if is for to see if there is a winner and if there is the button will not go through the fight function
    round_txt.innerHTML = "Round #" + round + " Results:";
    round++;
    if (result === "no winner")

        {

        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

    }else{
        fighter1_txt.innerHTML = result;
        fighter2_txt.innerHTML = "";

        button.removeEventListener("click", fight, false);

        document.querySelector('.buttonblue').innerHTML = 'DONE!!!'

    }
}
//this winner check will see who wins looses or draws in the fight. the string text will show up with the results
function winnerCheck() {
    var result = "no winner";
    if (fighters[0].health < 1 && fighters[1].health < 1) {
        result = "You Both Are Not Worthy To Live - Game Over!";
    } else if (fighters[0].health < 1) {
        result = fighters[1].name + " : The Gods Cannot Kill Me and You Thought You Could!?"
    } else if (fighters[1].health < 1) {
        result = fighters[0].name + " : Too Fast For A God!?"
    }
    return result;

}


})();







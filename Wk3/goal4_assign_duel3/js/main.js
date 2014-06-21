/*
 Name: Nicholas Shashaguay
 Date: 06/20/2014
 Assignment: Goal4: Assignment: Duel3
 Note: Changed the names of the fighters who are on the screen
 */



//alert("test")

function () {
    console.log("FIGHT!");

    var fighter1_txt = document.querySelector("#kabal").querySelector("p");
    var fighter2_txt = document.querySelector("#bw").querySelector("p");
    var round_txt = document.querySelector("h4");
    var button = document.getElementById("fight_btn");


    button.addEventListener("click", fight, false);


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
    var round = 1;

    round_txt.innerHTML = "Click FIGHT to start!";
    fighter1_txt.innerText = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerText = fighters[1].name + ":" + fighters[1].health;
}

function fight(){

    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

        fighters[0].health -=f1;
        fighters[1].health -=f2;

        console.log(fighters[0].health, fighters[1].health);
}
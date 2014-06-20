/*
 Name: Nicholas Shashaguay
 Date: 06/20/2014
 Assignment: Goal4: Assignment: Duel3
 Note: Changed the names of the fighters who are on the screen
 */



//alert("test")

function () {
    console.log("FIGHT!");

    var fighter1_txt = document.querySelector("#ww").querySelector("p");
    var fighter2_txt = document.querySelector("#bw").querySelector("p");
    var round_txt = document.querySelector("h4");
    var button = document.getElementById("fight_btn");
}

button.addEventListener("click", fight, false);


var fighters = [

    {
        name:"Kabal",
        damage:20,
        health:100

    },
    {
        name:"Kratos",
        damage:20,
        health:100

    }];
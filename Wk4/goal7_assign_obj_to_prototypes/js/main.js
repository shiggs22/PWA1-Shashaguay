/**
 *  Nicholas Shashaguay
 * 06/27/2014
 * Goal: Goal7
 */


(Function(){

    var numOfPeople = 3;
    var people = [];
    var names = ["Nicholas","Sean","Shane","Paul","Andrea"],
    var interval;


    for (var i = 0; i < numOfPeople ; i++) {

        var personIndex = Math.floor(Math.random()*names.length);

        var person = new Person(names[personIndex], i+1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);

    }


    clearInterval(interval);




    interval = setInterval(runUpdate, 1000 / 30);

    function populateHTML(data,field) {
        var id=document.getElementById(field);
        id.innerHTML = data;
    }





























}

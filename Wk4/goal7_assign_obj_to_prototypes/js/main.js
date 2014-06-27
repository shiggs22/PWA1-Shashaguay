/**
 *  Nicholas Shashaguay
 * 06/27/2014
 * Goal: Goal7
 */


(function(){

    //Var defines for the function call outs
    var numOfPeople = 3;
    var people = [];
    var names = ["Nicholas", "Sean", "Shane", "Paul", "Andrea"];
    var interval;

    // for loop for run through 3 person object
    for (var i = 0; i < numOfPeople ; i++) {

        // randomly selects names
        var personIndex = Math.floor(Math.random() * names.length);

        // keyword "new" person object
        var person = new Person(names[personIndex], i + 1);

        populateHTML(person.name, "r" + (i + 1) + "c1");
        populateHTML(person.job, "r" + (i + 1) + "c2");

        people.push(person);
        names.splice(personIndex, 1);

    }

    // clear interval to clear out the old interval before running the new interval
    clearInterval(interval);

    // interval set up for 30 fps
    interval = setInterval(runUpdate, 1000 / 30);

    function populateHTML(data, field) {
        var id = document.getElementById(field);
        id.innerHTML = data;
    }


    function runUpdate() {

        people.forEach(function (element) {
            element.update();
        });
    }

})();

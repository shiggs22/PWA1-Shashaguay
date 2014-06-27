/**
 *  Nicholas Shashaguay
 * 06/27/2014
 * Goal: Goal7
 */


(function() {

    // global window object for the main.js file
    window.Person=Person;


    // description of the people's jobs and the actions they take during the time frame
    Person.jobs = ["fighter", "trainer", "student", "military"];
    Person.actions = ["sleeping", "eating", "working"];


    function Person(name, row) {
        console.log("Person Created: ", name);

        this.name = name;

        // set actions for each person randomly
        this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];

        // set jobs for each person randomly
        this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];

        // sets the rows for JS in HTML to update the text
        this.row = row;

        // displays action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML = this.action;

    }

    // prototype created to function 30 times a second thus randomly determines the action change for each person
    Person.prototype.update = function () {
        if (Math.floor(Math.random() < .01)) {
            var i = Math.floor(Math.random() * Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            id.innerHTML = this.actions;
        }

    }


})();





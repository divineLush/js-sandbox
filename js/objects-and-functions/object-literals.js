// OBJECT LITERALS

var obj = {};
// same as
// var obj = new Object();

console.log(obj);

var person = {
    firstName: 'Alex',
    age: 2021,
};
console.log(person);

// same as
// var person = new Object();
// person.firstName = 'Alex';
// person.age = 2021;

function greet(person) {
    console.log('Hi ' + person.firstName);
}

// Hi Alex
greet(person);

// create object on the fly
greet({ firstName: 'John' });

person.favGenre = 'Drone Doom Metal';
console.log(person);

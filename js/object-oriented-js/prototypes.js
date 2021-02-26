// PROTOTYPE

var person = {
    firstName: 'default',
    lastName: 'default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

var john = {
    firstName: 'John',
    lastName: 'Doe',
};

// DON'T DO THIS EVER
// PERFORMANCE ISSUE
john.__proto__ = person;
// john now inherits from person
// John Doe
console.log(john.getFullName());
// John Doe
// won't return default default because of prototype chain
// JS engine finds firstName inside john and stops
console.log(john.firstName, john.lastName);

var jane = {
    firstName: 'Jane',
};

jane.__proto__ = person;
// Jane default
console.log(jane.getFullName());


var obj = {};
var func = function () {};
var arr = [];

// Object
// the very bottom of the prototype chain
console.log(obj.__proto__);

// function Empty() {}
console.log(func.__proto__);

// []
console.log(arr.__proto__);
// FUNCTION CONSTRUCTORS

// function constructors are just constructors
function Person (firstName, lastName) {
    // window
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('this function is invoked');
}

// new is an operator that creates and empty object
// and then calls the function
// this inside a function points to that empty object
// as long as this function doesn't return a value
// the JS engine will return the object created by the 'new' operator
var john = new Person('John', 'Doe');
// Person {firstName: "John", lastName: "Doe"}
console.log(john, new Person('Jane', 'Doe'));

function X () {};
// X {} undefined
console.log(new X(), X());

function Y () {
    this.a = 0;

    return {
        b: 1,
    };
}

var y = new Y();
// undefined
console.log(y.a);

var y1 = Y();
// undefined
console.log(y1.a);

// {b: 1} {b: 1}
console.log(y, y1);


// all functions have special .prototype object
// set prototype of Person object (Person's __proto__ property)
Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}

// John Doe
console.log(john.getFullName());
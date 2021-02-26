// CALL, APPLY, BIND

// Execution context containt the following:
// 1. Variable environment
// 2. 'this'
// 3. Outer Environment

// All function have acces to call(), apply(), bind() methods

var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

var logName = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
}

// Uncaught TypeError: this.getFullName is not a function
// 'this' inside logName points to 'window'
// logName();

// .bind() returns a new function
var logPersonName = logName.bind(person);
// Logged: John Doe
// Arguments: en undefined
logPersonName('en');

// Logged: John Doe
// Arguments: en es
logName.call(person, 'en', 'es');

// Logged: John Doe
// Arguments: en es
logName.apply(person, ['en', 'es']);


var obj = {
    a: 1,
    b: 2,
};

// 1 2
(function () {
    console.log(this.a, this.b);
}).apply(obj);


// function borrowing
var person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
}
// Jane Doe
console.log(person.getFullName.call(person2));


// function currying
// creating a copy of a function with some preset parameters
function multiply (a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
// 6
console.log(multiplyByTwo(3));

var multiplyByThree = multiply.bind(this, 3);
// 9
console.log(multiplyByThree(3));

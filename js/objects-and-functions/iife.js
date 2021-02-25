// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)S

// function statement
function greet (name) {
    console.log('Hello ' + name);
}

greet('John');

// function expression
var greetFunc = function (name) {
    console.log('Hello ' + name);
}

greetFunc('John');

// IIFE
var greeting = function (name) {
    // own execution context
    return 'Hello ' + name;
}('John');

console.log(greeting);

(function (a, b) {
    // own execution context
    console.log(a * b);
})(1, 2);

(function (a, b) {
    // own execution context
    console.log(a + b);
}(1, 2));

// also valid synthax
(function () {});

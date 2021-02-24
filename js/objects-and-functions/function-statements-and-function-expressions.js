// FUNCTION STATEMENTS AND FUNCTION EXPRESSIONS

// Expression: a unit of code that results in a value
// It doesn't have to save to a variable

// expression was evaluated and returned a value
console.log(1 + 2);

var a;

// if is a statement as it doesn't return a value
if (a == 3) {}

// greet hoists as JS engine puts greet function in memory in Creation phase
greet();

// function statement
// when it's run it doesn't result in a value
function greet () {
    console.log('hi');
};

// anonymousGreet won't hoist as it was put inside a variable
// JS engine sets all variables equal to undefined during Creation phase
// Uncaught TypeError: anonymousGreet is not a function
// anonymousGreet();

// function expression
// function expressions aren't hoisted
// JS engine only hoists a variable
// creating function on the fly and storing it into the variable
var anonymousGreet = function () {
    console.log('anonymous hi');
};

anonymousGreet();


function log (a) {
    console.log('log', a);
    a();
}

// log(1);
// log('abc');
// log({ a: 1, b: '2', greeting: 'hi' });

// function expression creates a function object on the fly
log(function () { console.log('on the fly') });

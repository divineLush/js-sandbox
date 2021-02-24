// FUNCTIONS ARE OBJECTS

// First class functions
// Everything you can do with other types, you can do with functions
// Assign to variables, pass them around, create them on the fly

// You can attach properties and methods to functions (primitives, objects, other functions)
// as functions are objects

// Function objects have special properties:
// 1. Name (optional, function can be anonymous)
// 2. Code (where actual lines of code sit)

// The code inside a function is placed in a special property
// That property can be invoced("invocable")

function greet () {
    console.log('hi');
}

greet.language = 'english';

// logs function text
console.log(greet);

// english
console.log(greet.language);

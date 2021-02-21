// CREATION AND HOISTING

// What's executed isn't what was writen
// JS engine isn't physically moving the code and then executing it
// Hoisting happens because execution context is created in two phases:


// 1. Creation phase (Global Object, this, Outer Environment)

// As the parser runs through code and begins to set up what was written for translation
// it recognises where functions and variables were created.
// It sets up the memory space for the variables and functions
// Functions and variables exist in memory
// The function is entirely placed into memory space (its name and the code inside)
// JS isn't aware of the final value of the variable
// So it puts a placeholder - undefined
// All variables in JS are initially set to undefined
// It's a bad idea to rely on hoisting as expected value could be undefined

// 2. Execution phase


// 'Called b!'
b();
// undefined
// a variable is available
console.log(a);
// Uncaught ReferenceError: c is not defined
// console.log(c);

var a = 'Hello world';

function b () {
    console.log('Called b!');
}


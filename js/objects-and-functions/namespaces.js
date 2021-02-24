// FAKING NAMESPACES

// Namespace is a container for variables and functions
// Typically used to keep variables and functions with the same name separate

var greet = 'Hello!';
var greet = 'Hola!';

// Hola!
console.log(greet);

// using object as a container
var english = {
    greet: 'Hello!',
};

var spanish = {
    greet: 'Hola!',
};

console.log(english);

// Uncaught TypeError: Cannot set property 'greet' of undefined
// english.greetings.greet = 'Hello!';

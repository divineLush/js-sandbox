// GLOBAL ENVIRONMENT / GLOBAL OBJECT

// Execution context was created at the Global level
// Global Execution context creates Global Object and special variable 'this'

// Window
// Execution Context was created and decided that the value of 'this' is Window
console.log(this);
// Window object is a Global Object inside browsers
console.log(window);
// true
// at the Global level 'this' and 'window' are equal
console.log(window === this);

// Global means not inside a function

var a = 'Hello world!';

function b () {}

// Hello world! ƒ b () {}
// Variables and functions created outside a function are attached to Global Object
console.log(window.a, window.b);
console.log(this.a, this.b);
// true, true
console.log(this.a === window.a, this.b === window.b);

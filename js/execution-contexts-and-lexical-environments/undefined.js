// UNDEFINED

var a;
// undefined
// undefined means that variable hasn't been set
console.log(a);

// Uncaught ReferenceError: b is not defined
// Memory space was never set up for b
// console.log(b);

if (a === undefined) {
  console.log('a is undefined!');
} else {
  console.log('a is defined');
}

// never ser a variable to undefined
// var c = undefined;

// foo
foo();

function foo () {
  console.log('foo');
}

// undefined
console.log(d);

var d = 'Hello World!';

// Hello World!;
console.log(d);

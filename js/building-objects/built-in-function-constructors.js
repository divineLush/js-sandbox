// BUILT-IN FUNCTION CONSTRUCTORS

// not a primitive!
// Number {3}
console.log(new Number(3));

var john = new String('John');
// String {"John"}
console.log(new String('John'));
// h
console.log(john[2]);

// Boolean {false}
console.log(new Boolean(0));

console.log(new Date());

// adding a method to a prototype
String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
}

// true
// primitive value gets converted to a String object
console.log('John'.isLengthGreaterThan(2));

Number.prototype.isPositive = function () {
    return this > 0;
}

// error
// JS won't convert a number to an object automatically
// console.log(3.isPositive());

// true
console.log((new Number(3)).isPositive());

console.log('Hey from Emacs');

// true
console.log(3 == new Number(3));

// false
// false as new Number() is not a primitive
console.log(3 === new Number(3));

// it's better to use object literals

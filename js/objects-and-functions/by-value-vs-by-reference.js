// BY VALUE VS BY REFERENCE
// (variables in both cases)


// Primitive Value

// a has an address location where this primitive value sits
var a = 1;

// if a is a primitive value
// b points to a new address in memory
// copy of a primitive value is placed in that spot in memory

// By Value Approach: two variables become the same
// by copying the same value into two separate spots in memory

var b = a;

// changes to a won't affect b
// as a and b are two different spots in memory
a = 5;

// 5 1
console.log(a, b);


// Object

// objA has an address in memory where object lives
var objA = { abc: 123 };

// objB points at the same location as objA
// no copy of the object is created
// instead two names point to the same address (By Reference Approach)
var objB = objA;

// mutate
objA.abc = 321;

// { abc: 321 } { abc: 321 }
console.log(objA, objB);

// true
console.log(objA === objB);

// passing by reference (even as parameters)
function mutate (obj) {
    obj.greeting = 'hi';
}

mutate(objB);

console.log(objA, objB);

// = operator sets up new memory space (new address)
// by reference no longer apply
objA = { greeting: 'howdy' };

console.log(objA, objB);

// false
console.log(objA === objB);

// primitive types - by value
// objects - by reference

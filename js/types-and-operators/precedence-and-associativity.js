// OPERATORS

// operators are special types of functions

var a = 3 + 4 - 2;
// + is an operator
// infix notation
console.log(a, 2 > 4);

// function + (a, b) {
//     return // add the two
// }


// OPERATOR PRECEDENCE AND ASSOCIATIVITY

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// OPERATOR PRECEDENCE: which operator function gets called first
// Higher precedence wins
// precedence tells which operator gets called first

// ASSOCIATIVITY: what order operator functions get called in: left to right or right to left
// when functions have the same precedence

//  3 + 4 * 5 = 3 + 20 = 23
var b = 3 + 4 * 5;
console.log(b);

var a1 = 2, b1 = 3, c1 = 4;
a1 = b1 = c1;

// 4, 4, 4
// because of associativity
// = operator's associativity is right to left
// so it gets called from left to right:
// b1 = c1
// a1 = b1
console.log(a1, b1, c1);

// (3 + 4) * 5 = 7 * 5 = 35
console.log((3 + 4) * 5);

// OBJECTS

// objects are collections of name/value pairs

// What values?
// Object can have properties and methods:
// 1. Primitive type (primitive property)
// 2. Another object (object property)
// 3. Function (method)

// Object sits in memory and has references to its properties that also sit in memory

var obj = new Object();

// left associativity
// computed member access operator []
obj['first'] = 'Solve';
obj['last'] = 'Coagula';

var firstProperty = 'first';

console.log(obj);

console.log(obj[firstProperty]);

// left associativity
// member access operator (dot operator)
console.log(obj.first);
console.log(obj.last);

obj.address = new Object();
obj.address.street = '111 Satan St.';
obj.address.city = 'Lake Of Fire';

console.log(obj['address']['street']);

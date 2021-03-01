// TYPEOF, INSTANCEOF

var a = 3;
// number
console.log(typeof a);

// number
console.log(typeof Number(3));

var b = '3';
// string
console.log(typeof b);

console.log(typeof String('3'));

var obj = {};
// object
console.log(typeof obj);

var arr = [];
// object
// weird!
console.log(typeof arr);
// [object Array]
// better
console.log(Object.prototype.toString.call(arr));


function Person (name) {
    this.name = name;
}

var john = new Person('John');
// object
console.log(typeof john);
// true
// look for Person in prototype chain
console.log(john instanceof Person);

// undefined
console.log(typeof undefined);
// object
// ???
console.log(typeof null);

var func = function () {};
// function
console.log(typeof func);
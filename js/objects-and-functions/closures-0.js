// CLOSURES

function greet (whatToSay) {
    // greet() execution context
    // whatToSay sits in its Variable Environment

    return function (name) {
        // when JS engine hits this console.log
        // it goes up the scope chain (Outer Environment)

        // the sayHi execution context still has a reference
        // to the variables, to the memory space of its outer environment

        // even though the greet function was finished
        // any functions created inside of it
        // will still have a reference to greet functions memory
        console.log(whatToSay + ' ' + name);
    }

    // after 'return' the greet() execution context is gone
    // every execution context has its own Variable Environment
    // under normal surcomstances the JS engine would clear it out (garbage collection)
    // but at the moment greet() execution context finishes
    // that memory space is still there
}

// Hello John
greet('Hello')('John');

// create new execution context
// the sayHi execution context still has a reference
// to the variables, to the memory space of its outer environment
var sayHi = greet('Hi');
// Hi John
// greet remembers whatToSay argument
sayHi('John');


function foo (arg) {
    var a = arg + 1;
    var b = arg - 1;

    return function (newArg) {
        console.log((a + b + arg) / newArg);
    }
}

// 1.5
foo(2)(4);

var two = foo(2);
// 2
two(3);
// 1.2
two(5);

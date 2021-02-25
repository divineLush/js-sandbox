// 'arguments' and SPREAD

// Execution context is created
// 1. Variable Environment
// 2. 'this'
// 3. Outer Environment
// 4. 'arguments'

// 'arguments' contains a list of all the values,
// of all the parameters that were passed

function greet (firstName, lastName, language, ...otherParams) {
    // default parameter workaround
    // firstName = firstName || 'Default First Name';

    console.log(firstName, lastName, language);

    // arguments is not exactly JS array
    // but acts and looks like JS array
    console.log(arguments);

    // 'divine'
    console.log(arguments[0]);

    // SPREAD
    // otherParams is an array
    console.log(otherParams);

    // if no arguments passed
    if (arguments.length) {
        console.log('missing parameters');
    }
}

// undefined undefined undefined
greet();

// divine undefined undefined
greet('divine');

greet('a', 'b', 'c', 'd', 'e');

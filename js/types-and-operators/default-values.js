// DEFAULT VALUES

function greet (name) {
    console.log('Hello ' + name);
}

// Alex
greet('Alex');

// Hello undefined
// Won't throw an error
greet();

function greetWithDefault (name) {
    // setting default value
    name = name || 'Default Value';

    console.log('Hello ' + name);
}

// Hello Default Value
greetWithDefault();

// Hello Default Value
greetWithDefault(0);

// Hello Alex
greetWithDefault('Alex');


// || operator doesn't just do true or false
// it returns a value that can be coerced to true
// This happens because operators are just functions that return values

// true
console.log('true || false', true || false);

// hello
console.log(`undefined || 'hello'`, undefined || 'hello');

// because Boolean('hello') gives true
console.log(`Boolean('hello')`, Boolean('hello'));

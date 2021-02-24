// JSON AND OBJECT LITERALS

// JSON = JavaScript object notation

var objectLiteral = {
    a: 1,
    b: 2,
};

console.log(objectLiteral);

// JSON
// property names are wrapped in quotes
// {
//     "a": 1,
//     "b": 2,
// }

// Anything that is JSON valid is also valid JavaScript object literal synthax
// but not all object literal synthax is valid JSON

// JSON has stricter rules
// JSON doesn't allow to put functions as values

// convert to JSON string
console.log(JSON.stringify(objectLiteral));

var jsonString = '{ "a": 1, "b": 2 }';
// taking JSON string and converting it to object
console.log(JSON.parse(jsonString));

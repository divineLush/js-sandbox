// FOR...IN

Array.prototype.myCustomFeature = 'cool';

var arr = ['a', 'b', 'c', 'd'];
// arrays are objects
// each of its items is a key/value pair

// can be iterated down to prototype
for (prop in arr) {
    // will console.log myCustomFeature: cool
    console.log(prop + ': ' + arr[prop]);
}

// don't use for in
// use instead
// for (var i = 0; i < arr.length: i++) {}

for (value of arr) {
    console.log(value);
    // a b c d
    // won't log 'cool'
}
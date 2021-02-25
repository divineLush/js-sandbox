// ARRAYS

// array is a collection of anything
// var arr = new Array();
var arr = [1, { name: 'Alex' }, '3'];

arr[3] = 4;
// 1 { name: 'Alex' } '3' 4
console.log(arr);

arr[7] = function(name) {
    console.log('Hello ' + name);
};

// undefined, undefined
console.log(arr[5], arr[6]);

// Hello Alex
arr[7](arr[1].name);

// FUNCTIONAL PROGRAMMING

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}

// 2 4 6
console.log(arr2);

function mapForEach (arr, fn) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }

    return newArr;
}

var arr3 = mapForEach(arr1, function(num) { return num * 2; });
// 2 4 6
console.log(arr3);

var arr4 = mapForEach(arr1, function(num) { return num > 2; });
// false false true
console.log(arr4);

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}

var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// false, true, true
console.log(arr5);


function genCheckPastLimit (limiter) {
    return function (item) {
        return item > limiter;
    }
}

var checkTwo = genCheckPastLimit(2);
var arr6 = mapForEach([1, 2, 3, 4], checkTwo);

// false false true true
console.log(arr6);

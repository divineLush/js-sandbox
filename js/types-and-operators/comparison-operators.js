// COMPARISON OPERATORS

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// true
console.log('1 < 2 < 3', 1 < 2 < 3);

// true
// two < operators have the same precedence
// left to right associativity
console.log('3 < 2 < 1', 3 < 2 < 1);

// in fact, this is being run:

// console.log(false < 1);
// as 3 < 2 = false

// and then:

// console.log(0 < 1);
// false < 1 = true
// as false converts to 0

// 0
console.log('Number(false)', Number(false));

// 1
console.log('Number(true)', Number(true));

// true
// true < 3
// 1 < 3
console.log('1 < 2 < 3', 1 < 2 < 3);

// true
console.log('3 == 3', 3 == 3);

// true
console.log(`3 == '3'`, 3 == '3');

// false
console.log(`3 === '3'`, 3 === '3');

// true
console.log('false == 0', false == 0);

// true
// null becomes 0 under certain surcomstances
// like null < 1
// however it doesn't coerce to 0 for comparison
console.log('null == 0', null == 0);

// true
console.log(`'' == 0`, '' == 0);

// false
console.log(`'' == false`, '' == false);

// === doesn't try to coerce values
// if the two values are not the same type it returns false

// true
console.log('3 === 3', 3 === 3);

// false
console.log(`3 === '3'`, 3 === '3');


// Try to do comparison against things that you know will be the same type
// Use '==='
// Don't use '==' unless you consiously want to coerce two values

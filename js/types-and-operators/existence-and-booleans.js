// EXISTENCE AND BOOLEANS

// false
console.log('Boolean(undefined)', Boolean(undefined));

// false
console.log('Boolean(null)', Boolean(null));

// false
console.log(`Boolean('')`, Boolean(''));

// false
console.log('Boolean(0)', Boolean(0));

var a;

// if
// JS will attemp to coerce whatever is put inside the if statement
if (!a) {
    console.log('if');
}

// !a
console.log(a ? 'a' : '!a');

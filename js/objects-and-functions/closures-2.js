// CLOSURES AND CALLBACKS

function sayHi () {
    var greeting = 'Hi';

    setTimeout(function() {
        // even after 'sayHi' finished running
        // this function still has access to 'greeting' variable
        console.log(greeting);
    }, 3000);
}

sayHi();

// document
//     .querySelector('button')
//     .addEventListener('click', () => {
//         console.log('click');
//     });


function tellMeWhenDone (callback) {
    var a = 1000;

    callback();
}

tellMeWhenDone(function () {
    console.log('done');
});

tellMeWhenDone(function () {
    alert('done');
});

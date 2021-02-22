// EVENT QUEUE

// Event queue get looked at event queue when execution stack is empty
// If event queue is done, JS still watches it
// JS handles events in order they happen

function wait () {
    var ms = 5000 + new Date().getTime();

    while (new Date() < ms) {}

    console.log('finished function');
}

function clickHandler () {
    console.log('click event!');
}

document.addEventListener('click', clickHandler);

wait();
console.log('finished execution');

// If I click while loading:

// finished function
// finished execution
// click event!

// FUNCTION OVERLOADING

// Function overloading isn't available in JS
// as functions are objects

function greet (firstName, lastName, language) {
    language = language || 'en';

    if (language === 'en') {
        console.log('Hello ' + firstName + ' ' + lastName);
    }

    if (language === 'es') {
        console.log('Hola ' + firstName + ' ' + lastName);
    }
}

function greetEnglish (firstName, lastName) {
    greet(firstName, lastName, 'en');
}

function greetSpanish (firstName, lastName) {
    greet(firstName, lastName, 'es');
}

greet('John', 'Doe', 'en');
greet('John', 'Doe', 'es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

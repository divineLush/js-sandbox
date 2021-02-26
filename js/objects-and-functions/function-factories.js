// FUNCTION FACTORIES

var LANGUAGES = {
    english: 'en',
    spanish: 'es',
};

function makeGreeting (language) {
    return function (firstName, lastName) {
        var greeting;

        if (language === LANGUAGES.english)
            greeting = 'Hello';

        if (language === LANGUAGES.spanish)
            greeting = 'Hola';

        if (greeting)
            console.log(greeting + ' ' + firstName + ' ' + lastName);
    }
}

// each makeGreeting call creates a new execution context
// greetEnglish and greetSpanish have their own closure ('en' & 'es')
var greetEnglish = makeGreeting(LANGUAGES.english);
var greetSpanish = makeGreeting(LANGUAGES.spanish);

greetEnglish('John', 'Doe');
greetSpanish('Jane', 'Doe');

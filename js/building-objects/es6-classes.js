// ES6 AND CLASSES

// classes are just syntactic sugar in js

// class Person is an object
class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet () {
        return 'Hi ' + this.firstName;
    }
}

// creating object from the Person object
var john = new Person();
console.log(john);

// 'extends' sets the prototype (__proto__)
class InformalPerson extends Person {
    constructor (firstName, lastName) {
        // calling prototype object constructor
        super(firstName, lastName);
    }

    greet () {
        return 'Yo ' + this.firstName;
    }
}

var alex = new InformalPerson();
console.log(alex.greet());
// OBJECT.CREATE AND PURE PROTOTYPAL INHERITANCE

var person = {
    firstName: 'default',
    lastName: 'default',
    greet: function () {
        return 'Hi ' + this.firstName;
    },
};

// creates empty object with its prototype pointing at person
var john = Object.create(person);
console.log(john);
john.firstName = 'John';
// Hi John
console.log(john.greet());


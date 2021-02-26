// REFLECTION AND EXTEND

// Reflection:
// an object can look at itself,
// listing and changing its properties and methods

var person = {
    firstName: 'default',
    lastName: 'default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    },
};

var john = {
    firstName: 'John',
    lastName: 'Doe',
};

// DON'T DO THIS EVER
// PERFORMANCE ISSUE
john.__proto__ = person;

// loop over every key in the object
for (prop in john) {
    if (john.hasOwnProperty(prop)) {
        // won't log getFullName as this method was inherited
        // reflection john[prop])
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111',
    getFormalFullName: function () {
        return this.lastName + ', ' + this.firstName;
    },
};

var jim = {
    getFirstName: function () {
        return this.firstName;
    },
};

// underscore
// extend a given object with all the properties in passed im objects
// _.extend(john, jane, jim);
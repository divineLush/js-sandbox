// OBJECTS, FUNCTIONS, 'THIS'

// When a function is invoked, a new execution context gets created
// and put on execution stack

// Each execution context has:
// 1. Variable environment (where variables created inside a function live)
// 2. Reference to its outer environment
// 3. this (will be pointing at a different object depending on how a function is invoked)

// 'this' points to global object
// which is 'window' inside a browser
console.log(this);

function a () {
    console.log(this);
    // attach 'hello' to global namespace
    this.newVar = 'hello';
}

// window
// 'this' still points to global object
a();

console.log(newVar);

var b = function() {
    console.log(this);
}

// window
b();

// Whenever a function is created on a global level
// 'this' points to 'window'


var obj = {
    name: 'object',
    foo: function () {
        // mutate object
        this.name = 'updated name';
        // { name: 'updated name', log: f }
        console.log(this);

        var setName = function (newName) {
            this.name = newName;
        }

        // { name: 'updated name', log: f }
        // this didn't seem to do anything
        setName('brand new name');
        console.log(this);

        // brand new name
        // so setName points to global window object
        // even though it sits inside a method
        console.log(window.name)

        // to work around this:
        // self points to the whole object
        var self = this;

        var setObjectName = function (newName) {
            self.name = newName;
        }

        setObjectName('new shiny name');
        // new shiny name
        console.log(this.name)
    },
};

// { name: 'updated name', log: f }
obj.foo();

// FUNCTION INVOCATION, VARIABLE ENVIRONMENTS

// Every time a function is invoked (even if it's invoking itself)
// a new execution context is created for that function

// create global execution context

function b () {
    // execution context
    // b, window
    console.log('b', this);
  }

  function a () {
    // execution context
    // a, window
    console.log('a', this);

    // create execution context b()
    b();
  }

  // create execution context a()
  a();


  // Event though the 'myVar' is declared three times, they are unique
  // Every myVar is sitting in its own execution context
  function fooB () {
    // fooB execution context

    var myVar;
    // fooB undefined
    console.log('fooB', myVar);
  }

  function fooA () {
    // fooA execution context

    var myVar = 2;
    // fooA 2
    console.log('fooA', myVar);
    fooB();
  }

  // Global execution context
  var myVar = 1;
  // myVar 1
  console.log('myVar', myVar);
  fooA();
  // myVar 1
  // Same result as above
  // As code is run in global execution context
  console.log('myVar', myVar);

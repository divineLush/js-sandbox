// THE SCOPE CHAIN

function b () {
    // myVar value from global scope
    // b 1
    console.log('b', myVar);
  }

  function a () {
    var myVar = 2;
    b();
    console.log('a', myVar);
  }

  var myVar = 1;
  a();
  console.log('global', myVar);


  // Execution stack
  // Global execution context: myVar = 1
  // a() execution context: myVar = 2
  // b() execution context: myVar = 1 from global execution context

  // Every execution context has a reference to the outer environment
  // In case of function b, its outer environment is global execution context
  // Same for a

  // What kind of outer environment are we referring to?
  // Lexical environment (where something is written physically in code)

  // Lexically function b sits at the same level as function a
  // Thats why their outer environments are the same

  // If JS engine can't find a variable inside current execution context
  // it will search for that variable in outer environment
  // Outer environment depends on lexical environment

  // Scope chain is a chain of outer environment references


  function fooA () {

    function fooB () {
      // fooB 2
      // outer environment is fooA
      console.log('fooB', myVar);
    }

    var myVar = 2;
    fooB();
  }

  fooA();


  function barA () {

    function barB () {
      // barB 1
      // outer environment is fooA
      console.log('barB', myVar);
    }

    // myVar not found
    // search for myVar in outer environment
    // outer environment is global
    barB();
  }

  barA();

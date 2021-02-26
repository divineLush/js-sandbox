// CLOSURES

function buildFunctions () {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
        );
    }

    return arr;
}

var fs = buildFunctions();

// all fs functions have the same Outer Environment
// so they all point to the same memory spot
// because they were all created inside the same function

// 3 3 3
fs[0]();
fs[1]();
fs[2]();


function fixedBuildFunctions () {
    var arr = [];

    // ES6 solution
    // for (let i = 0; i < 3; i++) {
    //     arr.push(
    //         function () {
    //             console.log(i);
    //         }
    //     );
    // }

    // ES5 solution
    for (let i = 0; i < 3; i++) {
        arr.push(
            (function () {
                return function () {
                    console.log(i);
                }
            })(i)
        );
    }

    return arr;
}

var fixedFs = fixedBuildFunctions();

// 0 1 2
fixedFs[0]();
fixedFs[1]();
fixedFs[2]();

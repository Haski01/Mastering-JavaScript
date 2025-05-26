// Immediately Invoked Function Expressions (IIFE)

// [Note]

// 1. (IIFE) in JavaScript is used primarily to create a new scope, encapsulating variables and "preventing them from polluting the global scope".
// 2. It is a function that is defined and executed immediately after its creation.

// 3. ; semecolumn is imp in iife to stop execution

//                                  [iife with plain function or called named IIFE]

(function db() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
// (<function defination>)(<execution>)

//                                  [with arrow funciton OR unnamed iife]

(() => {
  console.log(`DB CONNECTED`);
})();

//                                  [with passing parameter]

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("asad");

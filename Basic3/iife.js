// Immediately Invoked Function Expressions (IIFE)
// A JavaScript immediately invoked function expression is a function defined as an expression and executed immediately after creation.
// TO get rid from global pollution we use iife

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

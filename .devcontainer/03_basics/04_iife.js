// Immediately invoked function expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();
( (name) => {
    // simple iife
    console.log(`DB connected two ${name}`);
}) (`nisha`);
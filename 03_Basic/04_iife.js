//  Immediately Invoked Function Expressions (IIFE)
// use for removing polution of global scope

(function chai(){
    console.log(`DB CONNECTED`);
})();

// ( function code() {
//     console.log(`DB CONNECTED TWO`);
// } )()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('priyanshu')
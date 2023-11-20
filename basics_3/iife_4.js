//Immediately Invoked Function like database

(function chai() {          //named iife
    console.log(`DB manager`);
})();       //should use semi clumn

(()=> {
    console.log(`DB manager two`);
})();

((name)=> {
    console.log(`DB manager two ${name}`);   // to pass arguments
})("feroz")
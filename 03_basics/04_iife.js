// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log("DB Connected");
})();

((name)=>{
    //parameter/unnamed iffe using arrow function
    console.log(`DB Connected Two ${name}`);
})("Vishal");


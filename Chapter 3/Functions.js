////Functions

/*****Defining a Function****/
//a Function definition is a regular binding when the value of a binding is a function
const square = function (x) {
    return x * x;
}
console.log(square(12));
// -> 144
//a function is created with an expression that starts with a keyword function.


/*****Parameters****/
//a function can have mutople parameters or no parameters at all.

const makeNoise = function() { console.log("Pling!");
};
makeNoise(); // → Pling!
 const power = function(base, exponent) {
   let result = 1;
   for (let count = 0; count < exponent; count++) {
     result *= base;
   }
   return result;
 };
console.log(power(2, 10)); // → 1024


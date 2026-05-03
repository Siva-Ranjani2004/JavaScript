// Miscellneous data types

// Boolean - Used in conditions
let isPresent = true;
console.log(isPresent);
console.log(typeof isPresent);

let condition1 = 3>4;
console.log(condition1);

// Null
let value = null;
console.log(value," ",typeof value);

// Undefined 
let a; // a is declared but not defined so JS will take it as undefined type by default 
console.log(a," ",typeof a);

let b = undefined; // We can assign undefined as a value
console.log(b," ", typeof b);


// Trivia question - JS is dynamically typed language
let name = "sivaranjani";
console.log(typeof name);
name = 21;
console.log(typeof name);
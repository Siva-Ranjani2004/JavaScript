// Big int 
// Number range is 2^53 - 1. If data exceeds this range then we need to use bigint.
//  If we use number for very big numbers(>=2^53) precision loss will occur, then output will be wrong. 

// declaring big int using 'n'
let number = 987654398765498765987654n;
console.log(number);
console.log(typeof number); // bigint

//If we used atleast one operand operations can done between bigint operands only.
let periyaNumber = 987654323456789098765n;
let chinnaNumber = 1n; // chinna number should be big int inorder to perform sum operation with actual big int
let sum = periyaNumber + chinnaNumber;
console.log(sum);
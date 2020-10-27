// Random Number Generator

// function getRandomNumber (lower, upper) {
//     if ( isNaN(lower) || isNaN(upper) ) {
//         console.log('Both submissions must be numbers in numerical format, please. Try again.');
//     }
//     return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// }

// console.log( getRandomNumber(2, 50) );
// console.log( getRandomNumber(80) );
// console.log( getRandomNumber('six', 600) );


// Collect input from a guest

const inputLow = prompt('Please enter any number.');
const inputHigh = prompt('Please enter any number higher than your first.');

console.log(inputLow, inputHigh);

console.log( typeof inputLow, typeof inputHigh );

// Convert inputs from strings to numbers

const low = parseInt(inputLow);
const high = parseInt(inputHigh);

console.log(low, high);

console.log( typeof low, typeof high );

// FEATURE Use a JavaScript function to perform a mathematical operation

// function giveRandomNumber (low, high) {
//     if ( isNaN(low) || isNaN(high) ) {
//         console.log('Both submissions must be numbers in numerical format, please. Try again.');
//     }
//     return Math.floor(Math.random() * (high - low + 1)) + low;
// }

// console.log( giveRandomNumber() );




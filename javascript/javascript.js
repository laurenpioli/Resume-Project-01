// Random Number Generator

// Collect input from a guest

const inputLow = prompt('Please enter any number.');

console.log(inputLow);

console.log( typeof inputLow );

// Convert inputs from a string to a number

const low = parseInt(inputLow);

console.log(low);

console.log( typeof low );

// JAVASCRIPT FEATURE Use a JavaScript function to perform a mathematical operation

if (low) {
    const randomNumber = Math.floor( Math.random() * low ) + 1;
    //  Create a message displaying the random number
    console.log(`${randomNumber} is a random number between 1 and your number ${low}`);
} else {
    console.log(`Please reload the page and provide a number in numerical format.`);
}

// Change console logs to document writers
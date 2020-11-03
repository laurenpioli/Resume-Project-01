// Random Number Generator

// Collect input from a guest

function question() {
    const inputLow = prompt('Please enter any number higher than 1.');

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
        document.querySelector("#randomanswer").innerHTML = `${randomNumber} is a random number from 1 to your number ${low}`;
    } else {
        console.log(`Please reload the page and provide a number in numerical format.`);
        document.querySelector("#randomanswer").innerHTML = `Please reload the page and provide a number in numerical format.`;
    }
    
    // Change console logs to document writers
    

}




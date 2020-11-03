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


// Age Recalculator

    // Establish constants

const secondsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;

    // Collect input from a guest

function ageCalc() {
    const inputAge = prompt('Please enter your age in years.');

    console.log(inputAge);

    console.log( typeof inputAge );
    
    // Convert inputs from a string to a number

    const ageYears = parseInt(inputAge);
    
    console.log(ageYears);
    
    console.log( typeof ageYears );

    const recalcAge = prompt("Please enter a period of time you'd like your age recalculated into.")
    
    if (recalcAge === 'weeks' ) {
        let weeksAlive = ( ageYears * weeksPerYear) ;
        console.log(weeksAlive);
        document.querySelector("#agecalculation").innerHTML = `You have been alive for ${weeksAlive} weeks.`;

    // } else if ( recalcAge === 'minutes' ) {
    //     let ageAnswer = ( ageYears * minutesPerHour * hoursPerDay * daysPerWeek * weeksPerYear );

    }
    

}
        // JAVASCRIPT FEATURE Use a JavaScript function to perform a mathematical operation

    // if (ageYears) {
    //     if ( isNAN(ageYears) {
    //     //  Create a message displaying the random number
    //     console.log(`Please reload the page and provide an age number in numerical format.`);
    //     // document.querySelector("#agecalculation").innerHTML = `${ageYears} is a random number from 1 to your number ${low}`;
    // } else {
    //     console.log(`.`);
    //     // document.querySelector("#randomanswer").innerHTML = `Please reload the page and provide a number in numerical format.`;
    // }
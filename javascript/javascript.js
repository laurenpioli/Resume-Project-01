// Random Number Generator

// Collect input from a guest

function question() {
    const inputLow = document.getElementById('guestinput').value

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
        document.querySelector("#randomanswer").innerHTML = `Answer:  ${randomNumber} is a random number from 1 to your number ${low}.`;
    } else {
        // throw an error if the submission was blank or not a number
        console.log(`Please reload the page and provide a number in numerical format.`);
        document.querySelector("#randomanswer").innerHTML = `Error:  Please provide a number in numerical format.`;
    }
    

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
    const inputAge = document.getElementById('guestage').value

    console.log(inputAge);

    console.log( typeof inputAge );
    
    // Convert inputs from a string to a number

    const ageYears = parseInt(inputAge);
    
    console.log(ageYears);
    
    console.log( typeof ageYears );

    const recalcAge = document.getElementById('period').value
    
    // JAVASCRIPT FEATURE Use a JavaScript function to perform a mathematical operation
    
    if (ageYears) {
        let weeksAlive = ( ageYears * weeksPerYear );
        console.log(weeksAlive);
        //  Create a message displaying the recalculated figure
        document.querySelector("#agecalculation").innerHTML = `Answer:  You have been alive for ${weeksAlive} weeks.`;
        const reactionGif = `
            <img src="gifs/monkey-puppet.gif">
            `;
        document.querySelector("#gif-reaction").innerHTML = reactionGif;

    } else {
        // throw an error if the submission was blank or not a number
        console.log(`Please reload the page and provide a number in numerical format.`);
        document.querySelector("#agecalculation").innerHTML = `Error:  Please provide a number in numerical format.`;

    }
    
    
// Previous work in case I need it

    // (recalcAge === 'weeks') {
    //     let weeksAlive = ( ageYears * weeksPerYear) ;
    //     console.log(weeksAlive);
    //     document.querySelector("#agecalculation").innerHTML = `Answer:  You have been alive for ${weeksAlive} weeks.`;
    //     const reactionGif = `
    //         <img src="monkey-puppet.gif">
    //         `;
    //     document.querySelector("#gif-reaction").innerHTML = reactionGif;



    // } else if ( recalcAge === 'minutes' ) {
    //     let ageAnswer = ( ageYears * minutesPerHour * hoursPerDay * daysPerWeek * weeksPerYear );

    // } else {
    //     console.log(`Please reload the page and provide a number in numerical format.`);
    //     document.querySelector("#randomanswer").innerHTML = `Please reload the page and provide a number in numerical format.`;
    
    // }

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
// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// Create speedDetector function
function speedDetector() {
    let speed;

    // Loop function
    while (true) {

        // Prompt for speed input
        speed = prompt("Enter the speed of the car:");

        // Validate the speed inputs
        speed = parseFloat(speed);
        if (!isNaN(speed) && speed >= 0) {
            break;
        } else {
            console.log("Invalid input. Please enter a positive number or zero for speed.");
        }
    }

       // Speed points allocation
    if (speed <=70) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${points}`);
        }
    }
}

    // Run the function
speedDetector();

// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// Create studentGradeGenerator function
function studentGradeGenerator() {
let marks;
  
    // Using a loop function
    while (true) {

      //Prompt for marks input
      marks = prompt("Enter student marks (0-100): ");
      
      // Validate the marks input
      marks = parseFloat(marks);
      if (!isNaN(marks) && marks >= 0 && marks <= 100) {
          break;
      } else {
          console.log("Invalid input. Please enter a number between 0 and 100.");
      }
  }
  
  // Grade determination
  if (marks > 79) {
      console.log("Grade: A");
  } else if (marks >= 60) {
      console.log("Grade: B");
  } else if (marks >= 50) {
      console.log("Grade: C");
  } else if (marks >= 40) {
      console.log("Grade: D");
  } else {
      console.log("Grade: E");
  }
}
 
//Run the function
studentGradeGenerator();

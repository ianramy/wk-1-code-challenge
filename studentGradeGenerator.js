const prompt = require('prompt-sync')();

function gradeGenerator() {
    const marks = parseInt(prompt("Enter student marks (0-100): "));
 
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

gradeGenerator();

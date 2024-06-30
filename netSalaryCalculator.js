// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// Create netSalaryCalculator function
function netSalaryCalculator() {

    // Prompt user for inputs of basic salary and benefits
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));

    // Validate inputs
    if (isNaN(basicSalary) || basicSalary < 0 || isNaN(benefits) || benefits < 0) {
        console.log("Invalid input. Please enter positive numbers for salary and benefits.");
        return;
    }

    // Gross salary calculation
    const grossSalary = basicSalary + benefits;

    // PAYE (Tax) calculation based on provided rates
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else {
        tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((grossSalary - 32333) * 0.3);
    }

    // NHIF Deduction
    let nhifDeduction = 0;
    if (grossSalary <= 5999) nhifDeduction = 150;
    else if (grossSalary <= 7999) nhifDeduction = 300;
    else if (grossSalary <= 11999) nhifDeduction = 400;
    else if (grossSalary <= 14999) nhifDeduction = 500;
    else if (grossSalary <= 19999) nhifDeduction = 600;
    else if (grossSalary <= 24999) nhifDeduction = 750;
    else if (grossSalary <= 29999) nhifDeduction = 850;
    else if (grossSalary <= 34999) nhifDeduction = 900;
    else if (grossSalary <= 39999) nhifDeduction = 950;
    else if (grossSalary <= 44999) nhifDeduction = 1000;
    else if (grossSalary <= 49999) nhifDeduction = 1100;
    else if (grossSalary <= 59999) nhifDeduction = 1200;
    else if (grossSalary <= 69999) nhifDeduction = 1300;
    else if (grossSalary <= 79999) nhifDeduction = 1400;
    else if (grossSalary <= 89999) nhifDeduction = 1500;
    else if (grossSalary <= 99999) nhifDeduction = 1600;
    else nhifDeduction = 1700;

    // NSSF Deduction
    const nssfDeduction = Math.min(600, grossSalary * 0.06);

    // Net salary calculation
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    // Output results
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`Tax: ${tax.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

// Run the function
netSalaryCalculator();

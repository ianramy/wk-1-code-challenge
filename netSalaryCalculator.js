// netSalaryCalculator.js

function calculateNetSalary(basicSalary, benefits) {
    // KRA, NHIF, NSSF rates can be found in the provided links

    const grossSalary = basicSalary + benefits;
    
    // PAYE Calculation (simplified for demonstration)
    let tax;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        tax = 2400 + 2083.25 + (grossSalary - 32333) * 0.3;
    }
    
    // NHIF Contribution (simplified for demonstration)
    let nhif = grossSalary <= 5999 ? 150 : grossSalary <= 7999 ? 300 : grossSalary <= 11999 ? 400 : grossSalary <= 14999 ? 500 : grossSalary <= 19999 ? 600 : grossSalary <= 24999 ? 750 : grossSalary <= 29999 ? 850 : grossSalary <= 34999 ? 900 : grossSalary <= 39999 ? 950 : grossSalary <= 44999 ? 1000 : grossSalary <= 49999 ? 1100 : grossSalary <= 59999 ? 1200 : 1300;
    
    // NSSF Contribution (simplified for demonstration)
    const nssf = 200;
    
    const netSalary = grossSalary - tax - nhif - nssf;
    
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${tax}`);
    console.log(`NHIF: ${nhif}`);
    console.log(`NSSF: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Example usage:
calculateNetSalary(100000, 50000);

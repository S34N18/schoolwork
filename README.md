//  Determining net salary using arithmetic, logical and conditional operators

// create three function names for this challenge;

// calculating PAYE;

function glosssalary(salary) => {

        if (salary<= 24000){
            return salary * (10/100);
    
        }
        else if (salary >= 24001 && salary <= 32333){
            return ((salary-24000) * 0.25) + (24000 * 0.1)
        }
        else if (salary >= 32334 && salary <= 500000){
            return ((salary - 32333) * 0.3) + (24000 * 0.1) +  (32333 * 0.25);
        }
        else if (salary >= 500001 && salary <= 800000){
            return ((salary - 500000) * 0.32) + (24000 * 0.1) + (500000 * 0.3);
        }
        else {
            return salary * 0.35;
        }
    
    }
;



// determining the NHIF deduction;

const nhifDeduction = (grossPay) => {

    if (grossPay <= 5999){
        return 150;
    }
    else if (grossPay >= 6000 && grossPay <= 7999){
        return 300;
    }
    else if (grossPay >= 8000 && grossPay <= 11999){
        return 400;
    }
}
console.log (nhifDeduction(5000));

// calculating NSSF deduction;

// function nssfDeductions(grossSalary) {
//     if (grossSalary<=6000) {
//         return grossSalary*0.06;
//     } else if (grossSalary>6000 && grossSalary<18000) {
//         remainingAmount = grossSalary-6000;
//         const tierA =6000*0.06;
//         const tierB = remainingAmount*0.06;
//         nssfDeductionsAmount = tier1+tier2;
        
//     }else{
//         const tierA = 6000*0.06;
//         const tierB = 18000*0.06;
//         nssfDeductionsAmount = tier1+tier2;
//     }
//     return nssfDeductionsAmount;
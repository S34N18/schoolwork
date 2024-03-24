//calculating payee

function grossSalary(salary){
    if(salary <=24000){
        return salary*0.1;
    }
    else if(salary>=24001 && salary <=32333){
        return((salary-24000)*0.25) + (24000 * 0.1);
    }
    else if(salary >=32334 && salary <=500000){
        return(salary-32333) * 0.3 +(24000* 0.1) + (32333*0.25);
    }
    else if(salary >=500001 && salary <=800000){
        return(salary-500000) * 0.32 +(24000 * 0.1) + (500000 * 0.3); 
    }
    else (salary >=800001 && salary <=1600000)
    return salary*0.35;
    } 

//console.log(salary(250000))

//calculate nhif
function "nhifdeduction"(grosspay) 
if(grosspay <= 5999){
    return 150;
} 
else if(grosspay >=6000 && grosspay <=7999){
    return 300;
}
else if(grosspay >= 8000 && grosspay <= 11999){
    return 400;
}
else if(grosspay>=12000 && grosspay <= 14999){
    return 500;
}
else if(grosspay >=15000 && grosspay <=19999){
    return 600;
}
else if(grosspay >=20000 && grosspay <=24999){
    return 750;
}
else if(grosspay >=25000 && grosspay <=29999){
    return 850;
}
else if(grosspay >=30000 && grosspay <=34999){
    return 900;
}
else if(grosspay >=35000 && grosspay <=39999){
return 950;
}
else if(grosspay >=40000 && grosspay <=44999){
    return 1000;
}
else if(grosspay >=45000 && grosspay <=49999){
    return 1100;
}
else if(grosspay >=50000 && grosspay <=59999){
    return 1200;
}
else if(grosspay >=60000 && grosspay <=69999){
    return 1300;
}
else if(grosspay>=70000 && grosspay <=79999){
    return 1400;
}
else if(grosspay>=80000 && grosspay <=89999){
    return 1500;
}
else if(grosspay>=90000 && grosspay <=99999){
    return 1600;
}
else(grosspay <=100000){
    return 1700;
}


//calculating NSSF
function NSSFDeduction(grossSalary){
    if(grossSalary>=7000 && grossSalary<= 18000){
        return salary * 0.06;
    }
     else if(grossSalary > 6000 && grossSalary < 18000){
        remainingAmount = grossSalary - 6000;
        const tierA = 6000* 0.06;
        constB = remainingAmount * 0.06;
        NSSFDeductionAmount = tierA + tierB
       } else{
        const tierA = 6000*0.06;
        const tierB = 18000*0.06;
        NSSFDeductionAmount = tierA +tierB
       }
       return NSSFDeductionAmount;
    }
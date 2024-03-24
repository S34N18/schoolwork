function grading(score)
{
    let grade = '';

    if(score < 0 || score > 100){
        console.log("The score should be between 0 and 100");
        return true;
    }

    switch(true){
        case score >= 79:
            grade = 'A';
        break;

        case score >= 60:
            grade = 'B';
        break;
        
        case score >= 49:
            grade = "C";
        break;

        case score >= 40:
            grade = 'D';
        break;

        case score < 40:
            grade = 'F'
        break;
    }
    return grade;
}

console.log(grading(85));
console.log(grading(30));
console.log(grading(67));
console.log(grading(45));
console.log(grading(56));
console.log(grading(1));
console.log(grading(226));
console.log(grading(-1));
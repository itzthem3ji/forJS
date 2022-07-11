function gradingStudents(grades) {
    // Write your code here
    let newlist= [];
    for(let i = 1; i < grades.length; i++){
        let roundVal = Math.round(grades[i]/5)*5;
        if(roundVal - grades[i] >= 0 && grades[i] >= 38){
            newlist.push(Math.round(grades[i]/5)*5);
        }
        else 
        if(grades[i] < 38 || roundVal - grades[i] < 0){
            newlist.push(grades[i]);
        };
          
    };
    // newString =newlist.join(" \n")
    return newlist;    
}

grades = [4, 73, 67, 38, 33];
grades2 = [5, 27, 55, 83, 79, 66]
grades3 = [5, -17, 44, 63.5, 0.9, 6]

result = gradingStudents(grades);
result2 = gradingStudents(grades2);
result3 = gradingStudents(grades3);
console.log(result);
console.log(result2);
console.log(result3);
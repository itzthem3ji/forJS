function compareTriplets(a, b) {
    // Write your code here
    let answer = [];
    let counta = 0;
    let countb = 0;
    let p1 = 0, p2 = 0, i = 0, j = 0;
    
    for(i=0; i<a.length; i++){
        if(a[i] > b[i]){
            counta+=1;
        };
        if(a[i] < b[i]){
            countb+=1;
        }
        
    }
    
    
    answer.push(counta,countb);
    console.log(answer);   
    return answer;

}

compareTriplets([5, 6, 7,],[3, 6, 10]);
compareTriplets([25, 23, 12,],[32, 26, 27]);
compareTriplets([10, 16, 37,],[23, 46, 10]);
compareTriplets([8, 11, 17,],[8, 16, 10]);
compareTriplets([-7, 3, 13,],[7, 3, -13]);
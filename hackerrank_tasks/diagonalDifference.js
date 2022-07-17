function diagonalDifference(arr) {
    // Write your code here
    let count1 = 0;
    let count2 = 0;
    let diagDiff = 0;
    for(let i =0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i == j){
                count1+=arr[i][j];
            }
        }
    };
    
    let reversed = arr.reverse();
    for(let i =0; i < reversed.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(i == j){
                count2+=arr[i][j];
            }
        }
    }
    
    diagDiff = Math.abs(count1 - count2);
    console.log(diagDiff);
    return diagDiff;

}

diagonalDifference([[11, 2, 4],[4, 5, 6],[10, 8, -12]])
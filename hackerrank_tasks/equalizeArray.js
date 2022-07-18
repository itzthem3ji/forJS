/**
 * Given an array of integers, 
 * determine the minimum number of elements 
 * to delete to leave only elements of equal value.
 */


function equalizeArray(arr) {
    // Write your code here
    let dObject = {};
    let count = 0;
    let counta = 0
    let countb = 0
    arr.forEach(elem => {
        dObject[elem]=(dObject[elem] || 0)+1 
    });
    
    
    count = Object.values(dObject).reduce((a, b) => a > b ? countb+=b : counta+=a);
    
    
    console.log(count);
    return count;

}

equalizeArray([3, 3, 2, 1, 3]);
equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]);
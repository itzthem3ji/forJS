/**
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 */

function getIndexToIns(arr, num) {
    let count = 0;
    let arrSort = arr.sort(function(a,b){return a - b;});
    for(let i = 0; i < arrSort.length; i++){
      if (arrSort[i] === num){
        count = i;
        break;
      };
  
      if(arrSort[i] > num){
        if(arrSort[i] !== 0){
          count = i;
          break;
        }
      }
  
      if(arrSort[i] < num){
        count = arrSort.length;
      }
      
  
    }
    if(arrSort.length == 0){
        count = 0;
      };
    num = count;
    console.log(num);
    return num;
  }
  
  getIndexToIns([2, 5, 10], 15);
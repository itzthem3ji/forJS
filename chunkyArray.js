/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 * 
 * chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

 */

 function chunkArrayInGroups(arr, size) {
    let subArr = [];
    for( let i = 0; i < (arr.length/size); i++){
      let midArr = [];
      let start = i * size
      for(let j = start; j < start + size; j++){
        if(arr[j] !== undefined){
          midArr.push(arr[j]);
        }
        
      }
      subArr.push(midArr)
    }
  
    arr = subArr;
    console.log(arr)
    return arr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
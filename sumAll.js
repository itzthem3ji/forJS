/**
 * Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */


function sumAll(arr) {
    arr = arr.sort(function(a,b){return a - b});
    let output = 0;
    let start = [...arr].splice(",")[0];
    let end = [...arr].splice(",")[1];
  
    for(let i = start; i <= end; i++){
      output+=i;
    }
  
    console.log(output)
    return output;
  }
  
  sumAll([5, 10]);
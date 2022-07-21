/**
 * Given an array of integers, 
 * determine the minimum number of elements 
 * to delete to leave only elements of equal value.
 */


function equalizeArray(arr) {
    // Write your code here
    let dObject = {};
    let valist = 0;
    let hiMax = {};
    let hiCount = 0;
    let hMax = 0;
    let total = 0;
    let max = 0
    let t_entries = 0;
    let count = 0

    //creates a dictionary to count the total occurence of each element.
    arr.forEach(elem => {
        dObject[elem]=(dObject[elem] || 0)+1 
    });
    
    //stores an array of all the values of the object
    valist = Object.values(dObject);
    valist.forEach(elem => {
        hiMax[elem]=(hiMax[elem] || 0)+1 
    });;
    console.log(hiMax);
    hiCount = Object.values(hiMax);
    hMax = Math.floor(hiCount.reduce((a,b)=>a + b) / hiCount.length);
    console.log("Array of counts: "+valist);
    console.log("Highest count in valist: "+hMax);

    //gets the maximum value in the array
    max = valist.reduce((a,b)=>{return Math.max(a, b)});
    console.log("max: "+max);

    //loops through the array of values
    for(let i = 0; i < valist.length; i++){
        //checks if array element is the maximum value and increments t_entries
        if(valist[i] == max){
            t_entries+=1;
        }

        //If element is less than max and add element to total
        if(hiCount[i] < hMax){
            total+=valist[i];
        }else if(total == 0){
            total+=((valist.length)-hMax);
        }
    }
    console.log("total number of max entries: "+t_entries);
    console.log("Total value of entries not max: "+total);
    console.log("\n\n");
    return total;

}

equalizeArray([3, 3, 2, 1, 3]);
equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]);
equalizeArray([5, 2, 5, 1, 2, 3, 3, 3]);
equalizeArray([37, 32, 97, 35, 76, 62]);
equalizeArray([51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51]);
equalizeArray([10, 27, 9, 10, 100, 38, 30, 32, 45, 29, 27, 29, 32, 38, 32, 38, 14, 38, 29, 30, 63, 29, 63, 91, 54, 10, 63]);
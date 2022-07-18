/*
 * Complete the 'jumpingOnClouds' function celow.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    let count = 0;
    for(let i = 0; i < c.length; i++){
        if(c[i] == 0 && c[i+2]==0){
            count+=1;
            i = i+1;
        }else if(c[i] == 0 && c[i+2] == 1){
            count+=1;
        }else if(c[i] == 0 && c[i+1] == 0){
            count+=1;
        }
    }
    return count;

}

a = jumpingOnClouds([6,0, 0, 0, 0, 1, 0]);
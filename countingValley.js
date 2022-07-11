function countingValleys(steps, path) {
    // Write your code here
    let updateValley = 0;
    let moveUpDown = 0;
    for(let i = 0; i < steps; i++){
        let str = path.charAt(i);

        if (str == 'U'){
            moveUpDown++;
            if(moveUpDown === 0){
                updateValley++
            }
        }else{
            moveUpDown--;
        }
        
    };
    return updateValley;
}

let steps = 8;
let path = 'UDDDUDUU';

let answer = countingValleys(steps, path);
console.log(answer);
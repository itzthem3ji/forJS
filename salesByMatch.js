const { generateKeyPairSync } = require("crypto");

function socketMerchant(n, ar) {
    // Write your code here
    let count = 0;
    let tmp = {};
    ar.forEach(i=>{
        if(tmp[i]){
            count+=1;
            tmp[i] = 0;
        }else{
            tmp[i] = 1;
        }
    });

    return count;   
};

var n = 9;
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

result = socketMerchant(n, ar);

console.log(result);
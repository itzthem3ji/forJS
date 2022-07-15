function extraLongFactorials(n) {
    // Write your code here
    let a =BigInt(1);
    n = BigInt(n);
    for(let i = n; i > 1; i--){
        a*=i;
    }
    a= a.toString();
    for(let j = 0; j < a.length; j++){
        if(a[j] == "n"){
            a[j] = "0";
        }
    }
    console.log(a);
    return a;
}

extraLongFactorials(25);
extraLongFactorials(45);
extraLongFactorials(15);
extraLongFactorials(5);

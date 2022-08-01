function digits(n){
    let count = 0;
    if (n == 0) {
        console.log(1)
        return 1;
    }else {
        while(n > 0){
            n = Math.floor(n / 10);
            count++;
        }
        console.log(count)
        return count;
    } 
};

digits(25);
digits(0.5);
digits(-5);
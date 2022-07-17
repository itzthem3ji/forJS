function aVeryBigSum(ar) {
    // Write your code here
    let total = 0;
    for(let i = 0; i < ar.length; i++){
        total += Number(ar[i]);
    }
    return total;
};

a = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
b = aVeryBigSum([1000100005, 1002200002, 1000000003, 1007000004, 1000000005])
c = aVeryBigSum([1100005001, 1000000002, 1000000003, 1000080004, 1000000005])
d = aVeryBigSum([1000000001, 1009006002, 1000000003, 1000000404, 1000000005])
e = aVeryBigSum([1000000001, 1000000012, 1000800003, 1006000804, 1000000005])

console.log("a: "+a+"\n"+"b: "+b+"\n"+"c: "+c+"\n"+"d: "+d+"\n"+"e: "+e);
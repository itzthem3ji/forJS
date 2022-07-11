function destroyer(arr) {
    let input = arguments[0];
    let destroy = [];
    let output = [];
    for(let i =1; i < arguments.length; i++){
      destroy.push(arguments[i]);
    }
  
    for(let j = 0; j < input.length; j++){
      if(!destroy.includes(input[j])){
        output.push(input[j]);
      }
    }
    arr = output;
    console.log(arr)
    return arr;
  }
  
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);
  destroyer([2, 3, 2, 3], 2, 3);
  destroyer(["tree", "hamburger", 53], "tree", 53);
  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
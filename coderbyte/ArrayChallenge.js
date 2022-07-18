function ArrayChallenge(arr) { 
    let objet = {};
    let count = 0;
    let swapped = {};
  
    arr.forEach(elem => {
      objet[elem]=(objet[elem] || 0) + 1; 
    });
  
  
    count = Object.values(objet).reduce((a, b) => a > b ? a : b)
      if(count == 1){
        return 0;
      };
    return count; 
  }
     
  // keep this function call here 
  console.log(ArrayChallenge([100,2,101,4]));
  console.log(ArrayChallenge([0,-2,-2,5,5,5]));
  console.log(ArrayChallenge([100,22,109,100,22,100,22,22]));
  console.log(ArrayChallenge([-2,2,-2,101,4,2]));
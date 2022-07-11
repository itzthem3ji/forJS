function factorialize(num) {
  let product = 1;
  for(let i = num; i > 0; i--){
    product *= i
  }
  console.log(product)
  num = product;
  return num;
}

factorialize(5);
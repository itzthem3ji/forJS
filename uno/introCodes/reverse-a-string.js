function reverseString(str) {
  let revstr = "";
  for(let i = str.length - 1; i >= 0; i--){
    revstr += str[i];
  }
  str = revstr
  return str;
}

reverseString("hello");
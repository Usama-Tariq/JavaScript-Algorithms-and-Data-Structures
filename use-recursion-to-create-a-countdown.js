// Only change code below this line
function countdown(n){
  // if(n < 1){
  //   return [];
  // } else{
  // // if(n === 1){
  // //   return [1];
  // // }
  //   const arr = countdown(n - 1);
  //   arr.unshift(n);
  //   return arr;
  // }
  return n < 1 ? [] : [n, ...countdown(n - 1)];
  // const result = [n];
  // return result.concat(countdown(n-1));
  // console.log(result.concat(countdown(n-1)));
}
// Only change code above this line
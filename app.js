'use strict';

var fibMap = new Map();

function fib(n) {
  if (n == 0) {
    fibMap.set(0,0);
    return 0;
  } else if (n == 1) {
    fibMap.set(1,1);
    return 1;
  } else {
    let sum = fibMap.get(n-1) + fibMap.get(n-2);
    fibMap.set(n, sum);
    return sum;
  }
}

const length = 40;
for(let i = 0; i <= length; i++) {
  console.log(fib(i));
}

// function fib(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fib(n-1) + fib(n-2);
//   }
// }

// const length = 40;
// for(let i = 0; i <= length; i++) {
//   console.log(fib(i));
// }
"use strict";

let arr = ["12", "450", "120", "235", "789", "123456", "2852"];
for (let i = 0; i < 7; i++) {
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

console.log("");

nextPrime: for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i + " - Делители этого числа: 1 и " + i);
}

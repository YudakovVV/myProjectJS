let num = 266219;
let result = 1;
let arr = num.toString().split('');
for(let i = 0; i < arr.length; i++){
  result = result * arr[i];
}
console.log(result);
let pow = result ** 3;
console.log(pow);
let arrPow = num.toString().split('');
console.log(arrPow[0] + " " + arrPow[1]);


"use strict";
let title = prompt("Как называется ваш проект?");
console.log(title);
let screens = prompt(
  "Как называется ваш проект?",
  "Простые, Сложные, Интерактивные"
);
console.log(screens);
let screenPrice = +prompt("Сколько будет стоять данная работа", "1200");
let rollback = 20;
let fullPrice = 30000;
console.log(fullPrice);
let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);
let lowerCase = screens.toLowerCase();
let arr = lowerCase.split(",");
let persInter = fullPrice * (rollback / 100);
let service1;
let service2;
let servicePrice1 = 3000;
let servicePrice2 = 4000;

let questions = prompt(
  "Какой дополнительный тип услуги нужен?",
  "service1, service2"
);
let questions2 = prompt(
  "Сколько это будет стоить?",
  "servicePrice1, servicePrice2");

if (questions == "service1") {
  service1 = console.log(questions);   
  if(questions2 == "servicePrice1"){
    console.log(servicePrice1);
  }
  else console.log(servicePrice2); 
}
else 
  service2 = console.log(questions);   
  if(questions2 == "servicePrice1"){

    console.log(servicePrice1);
  }
  else console.log(servicePrice2);

fullPrice = screenPrice + servicePrice1 + servicePrice2;

//console.log(screens.length);
// console.log(screens);
 console.log(
   "Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани"
 );
// console.log(arr);
// console.log(persInter);
let servicePercentPrice = fullPrice - rollback;
console.log(servicePercentPrice);
if (fullPrice>= 30000){
  console.log("Даем скидку в 10%");
}
else if (fullPrice>= 15000 && fullPrice<=30000){
  console.log("Даем скидку в 5%");
}
else if (fullPrice<= 15000 && fullPrice >= 0){
  console.log("Скидка не предусмотрена%");
}
else console.log("Что то пошло не так");


// //////////////////////////////////////////////////////////////

// let num = 266219;
// function digitsMultip(num) {
//   let result = 1;
//   while (num > 0) {
//     if (num % 10) {
//       result *= num % 10;
//       num = Math.floor(num / 10);
//     }
//   }
//   return result;
// }
// console.log(digitsMultip(num));
////////////////////////////////////////////

// let answer = confirm("Тебе есть 18 лет?"); //вывод модального окна на экран с выбором действия
// console.log(answer);
// let answer2 = prompt("Сколько тебе лет?", "18 лет"); // вывод модального окна со строкой ввода
// console.log(answer2);

///////////////////////////
// let str = prompt("Сколько тебе лет?");
// let result = str + 10;
// console.log(parseInt(str)); //перевод в целоцисл.
// console.log(parseFloat(str)); //перевод в числ с плав точкой.
// console.log(result);

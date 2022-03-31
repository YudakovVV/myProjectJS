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
  "servicePrice1, servicePrice2"
);

if (questions == "service1") {
  service1 = console.log(questions);
  if (questions2 == "servicePrice1") {
    console.log(servicePrice1);
  } else console.log(servicePrice2);
} else service2 = console.log(questions);
if (questions2 == "servicePrice1") {
  console.log(servicePrice1);
} else console.log(servicePrice2);

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

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price <= 15000 && price >= 0) {
    return "Скидка не предусмотрена%";
  } else return "Что то пошло не так";
};
let rollbackMessage = getRollbackMessage(fullPrice);
console.log(rollbackMessage);

const getAllServicePrice = function () {
  return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrice();
console.log(allServicePrices);

// const getFullPrice = function () {
//   return screenPrice + allServicePrices;
// };
// fullPrice = getFullPrice();
// console.log(fullPrice);

function getFullPrice() {
  return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();
console.log(fullPrice);

const getTitle = function () {
  title = title.toLowerCase();
  return title.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};
console.log(getTitle(title));

const getServicePercentPrices = function () {
  return fullPrice - rollback;
};
let servicePercentPrices = getServicePercentPrices();
console.log(servicePercentPrices);

console.clear();

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

showTypeOf(screens);
showTypeOf(rollbackMessage);
showTypeOf(getServicePercentPrices());
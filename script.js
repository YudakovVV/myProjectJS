"use strict";
let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 20;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let servicePerformance;
let servicePercentPrices;
let rollbackMessage;
let service1;
let service2;
let servicePrice1;
let servicePrice2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
// const isString = function (string) {
//   return string;
// };

const asking = function () {
  title = prompt("Как называется ваш проект?", "КалькуЛяТор вЕрсТки");
  screens = prompt(
    "Какие типы экранов нужно разрабатывать?",
    "Простые, Сложные, Интерактивные"
  );    
  
  do {
    screenPrice = prompt("Сколько будет стоять данная работа?");
  } while (!isNumber(screenPrice));
    screenPrice = Number(screenPrice);

  // while (!isNumber(screenPrice)) {
  //   screenPrice = prompt("Сколько будет стоять данная работа?");
  // }

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {  

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "Сверстать слайдер");
      while (!isNumber(servicePrice1)) {
        servicePrice1 = prompt("Сколько это будет стоить?");
      }     
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "Блок с авторами");
      while (!isNumber(servicePrice2)) {
        servicePrice2 = prompt("Сколько это будет стоить?");
      }
      
    }    
  }
  return Number(servicePrice1) + Number(servicePrice2);
  // return servicePrice1 + servicePrice2;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

function getFullPrice() {
  // if (screenPrice == "null") screenPrice = 0;
  return screenPrice + allServicePrices;
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

const getTitle = function () {
  title = title.toLowerCase();
  return title.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price <= 15000 && price >= 0) {
    return "Скидка не предусмотрена%";
  } else return "Что то пошло не так";
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrices = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screens);
showTypeOf(adaptive);
// showTypeOf(rollbackMessage);
// showTypeOf(getServicePercentPrices());

console.log(allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(screenPrice);
console.log(typeof adaptive);

//console.log(screens.length);
//console.log(servicePercentPrice);

console.log(
  "Стоимость верски экранов " +
    Number(screenPrice) +
    " юани и Стоимость разработки сайта " +
    fullPrice +
    " юани"
);

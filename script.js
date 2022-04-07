"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  service1: "",
  service2: "",
  servicePrice1: "",
  servicePrice2: "",

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrices = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    appData.logger();
  },
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "КалькуЛяТор вЕрсТки");
    appData.screens = prompt(
      "Какие типы экранов нужно разрабатывать?",
      "Простые, Сложные, Интерактивные"
    );

    do {
      appData.screenPrice = prompt("Сколько будет стоять данная работа?");
    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = Number(appData.screenPrice);

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getAllServicePrices: function () {
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "Сверстать слайдер"
        );
        while (!appData.isNumber(appData.servicePrice1)) {
          appData.servicePrice1 = prompt("Сколько это будет стоить?");
        }
      } else if (i === 1) {
        appData.service2 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "Блок с авторами"
        );
        while (!appData.isNumber(appData.servicePrice2)) {
          appData.servicePrice2 = prompt("Сколько это будет стоить?");
        }
      }
    }
    return Number(appData.servicePrice1) + Number(appData.servicePrice2);
  },

  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    appData.title = appData.title.toLowerCase();
    return appData.title.replace(/(^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  },

  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price <= 15000 && price >= 0) {
      return "Скидка не предусмотрена%";
    } else return "Что то пошло не так";
  },
  logger: function () {
    for (let key in appData) {
      console.log("Ключ: " + key + " " + "Значение: " + appData[key]);
    }
  },
};
appData.start();
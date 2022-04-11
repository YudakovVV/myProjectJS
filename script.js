"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  services: {},

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    //спрашивать пока не ввел строку
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "КалькуЛяТор вЕрсТки"
      );
    } while (appData.isNumber(appData.title));

    for (let i = 0; i < 2; i++) {
      let picture;
      let price = 0;

      do {
        picture = prompt("Какие типы экранов нужно разрабатывать?", "Простые, Сложные, Интерактивные");
      } while (appData.isNumber(picture));

      do {
        //спрашивать пока не число
        price = prompt("Сколько будет стоять данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какой дополнительный тип услуги нужен?", "Сверстать галлерею");
      } while (appData.isNumber(name));

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));
      //Уникальное имя
      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    for (let screen of appData.screens) {      
      appData.screenPrice += +screen.price;
    }
    //через reduce
    // let result = appData.screens.reduce(function (sum, current) {
    //   return sum + Number(current.price);
    // }, 0);
    // appData.screenPrice = +result;

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrices =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  getTitle: function () {
    appData.title = appData.title.toLowerCase();
    appData.title = appData.title.replace(/(^|\s)\S/g, function (a) {
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
      if (typeof appData[key] !== 'function' && typeof appData[key] !== 'object') {
                console.log('ключ: ' + key + ' значение: ' + appData[key]);
            }
            if (typeof appData[key] === 'object') {
                console.log('ключ: ' + key + ' значение: ' + JSON.stringify(appData[key], null, 4));
    }
    // console.log(appData.fullPrice);
    // console.log(appData.servicePercentPrices);
    // console.log(appData.screens);
    // console.log(appData.screenPrice);
  }
  },
};
appData.start();

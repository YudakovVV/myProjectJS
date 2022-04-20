"use strict";
const title = document.getElementsByTagName("h1")[0];
const buttons = document.getElementsByClassName("handler_btn");
const calcBtn = buttons[0];
const resetBtn = buttons[1];
const plusBtn = document.querySelector(".screen-btn");
const itemsPersent = document.querySelectorAll(".other-items.percent");
const itemsNumber = document.querySelectorAll(".other-items.number");
const rollbackInput = document.querySelector(".rollback input");
const rollbackSpan = document.querySelector(".rollback .range-value");

const priceInput = document.getElementsByClassName("total-input")[0];
const screensCountInput = document.getElementsByClassName("total-input")[1];
const servicePricesInput = document.getElementsByClassName("total-input")[2];
const fullPriceInput = document.getElementsByClassName("total-input")[3];
const servicePercentPriceInput =
  document.getElementsByClassName("total-input")[4];
let screenElement = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screensCount: 0,
  screenPrice: 0,
  adaptive: true,
  rollback: 20,
  //все процентные услуги
  servicePricesPercent: 0,
  //все с фиксированной суммой
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrices: 0,
  servicesPercent: {},
  servicesNumber: {},

  init: function () {
    appData.addTitle();
    calcBtn.addEventListener("click", appData.start);
    plusBtn.addEventListener("click", appData.addScreenBlock);
    rollbackInput.addEventListener("input", appData.getRollInput);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  start: function () {
    appData.addScreens();
    console.log(appData.screens);
    if (appData.screens === 0) {
      alert("Введите данные");
    } else {
      appData.addServices();
      appData.addPrices();
      // appData.getServicePercentPrices();
      appData.logger();
      appData.showResult();
    }
  },

  showResult: function () {
    priceInput.value = appData.screenPrice;
    screensCountInput.value = appData.screensCount;
    servicePricesInput.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullPriceInput.value = appData.fullPrice;
    servicePercentPriceInput.value = appData.fullPrice - appData.rollbackPrice;
    console.log(appData.screenElement);
  },

  addScreens: function () {
    screenElement = document.querySelectorAll(".screen");
    appData.screens = [];
    screenElement.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      if (+select.value === 0) {
        return;
      }
      appData.screensCount += +input.value;
      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
    //console.log(appData.screens);
  },

  addServices: function () {
    itemsPersent.forEach(function (item) {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      //поставлена галочка или нет
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    itemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      //поставлена галочка или нет
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screenElement[0].cloneNode(true);

    screenElement[screenElement.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

    appData.rollbackPrice = Math.round(
      appData.fullPrice * (appData.rollback / 100)
    );

    appData.servicePercentPrices = appData.fullPrice - appData.rollbackPrice;
  },

  getRollInput: function (event) {
    rollbackSpan.textContent = event.target.value + "%";
    appData.rollback = event.target.value;
  },

  logger: function () {
    for (let key in appData) {
      if (
        typeof appData[key] !== "function" &&
        typeof appData[key] !== "object"
      ) {
        console.log("ключ: " + key + " значение: " + appData[key]);
      }
      if (typeof appData[key] === "object") {
        console.log(
          "ключ: " + key + " значение: " + JSON.stringify(appData[key], null, 4)
        );
      }
    }
  },
};
appData.init();

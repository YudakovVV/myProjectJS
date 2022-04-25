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

const checkboxs = document.querySelectorAll(".custom-checkbox");

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
    this.addTitle();
    calcBtn.addEventListener("click", this.start.bind(this));
    resetBtn.addEventListener("click", this.reset.bind(this));
    plusBtn.addEventListener("click", this.addScreenBlock.bind(this));
    rollbackInput.addEventListener("input", this.getRollInput.bind(this));
  },

  reset: function () {
    this.title = "";
    this.screens = [];
    this.screenPrice = 0;
    this.adaptive = true;
    this.rollback = 0;
    this.fullPrice = 0;
    this.rollbackPrice = 0;
    this.servicePercentPrice = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};

    // 1 скрыть кнопку сброс
    resetBtn.style.display = "none";
    // 2 раскрыть кнопку расчитать
    calcBtn.style.display = "block";
    // разблокировать все checkbox
    checkboxs.forEach(function (element) {
      element.disabled = false;
      element.checked = false;
    });
    // разблокировать select + input (котрый рядом с ним)
    let screenElement = document.querySelectorAll(".screen");
    screenElement.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      select.disabled = false;
      select.value = "";
      input.disabled = false;
      input.value = "";
    });
    // разблокировать плюс
    plusBtn.disabled = false;
    // разблокировать range
    rollbackInput.disabled = false;
    rollbackInput.value = 0;
    rollbackSpan.textContent = "0%";
    console.log(this);
    this.showResult();

    this.init();
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  start: function () {
    this.addScreens();
    console.log(this.screens);
    if (this.screens === 0) {
      alert("Введите данные");
    } else {
      this.addServices();
      this.addPrices();
      // this.getServicePercentPrices();
      this.logger();
      this.showResult();
    }
    // скрыть кнопку расчета
    calcBtn.style.display = "none";
    // раскрыть кнопка сброса
    resetBtn.style.display = "block";
    // блокировать все checkbox
    checkboxs.forEach((element) => {
      element.disabled = true;
    });
    // блокировать select + input (котрый рядом с ним)
    let screenElement = document.querySelectorAll(".screen");
    screenElement.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      select.disabled = true;
      input.disabled = true;
    });
    //блокировка добавления экранов
    plusBtn.disabled = true;
    //блокировка ползунка с процентами
    rollbackInput.disabled = true;
  },

  showResult: function () {
    priceInput.value = this.screenPrice;
    screensCountInput.value = this.screensCount;
    servicePricesInput.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullPriceInput.value = this.fullPrice;
    servicePercentPriceInput.value = this.fullPrice - this.rollbackPrice;
    console.log(this.screenElement);
  },

  addScreens: function () {
    screenElement = document.querySelectorAll(".screen");
    this.screens = [];
    screenElement.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      if (+select.value === 0) {
        return;
      }
      this.screensCount += +input.value;
      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
    //console.log(this.screens);
  },

  addServices: function () {
    itemsPersent.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      //поставлена галочка или нет
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    itemsNumber.forEach((item) => {
      const check = item.querySelector("input[type = checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type = text]");

      //поставлена галочка или нет
      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screenElement[0].cloneNode(true);

    screenElement[screenElement.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    for (let screen of this.screens) {
      this.screenPrice += +screen.price;
    }

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }
    this.fullPrice =
      +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

    this.rollbackPrice = Math.round(this.fullPrice * (this.rollback / 100));

    this.servicePercentPrices = this.fullPrice - this.rollbackPrice;
  },

  getRollInput: function (event) {
    rollbackSpan.textContent = event.target.value + "%";
    this.rollback = event.target.value;
  },

  logger: function () {
    for (let key in this) {
      if (typeof this[key] !== "function" && typeof this[key] !== "object") {
        console.log("ключ: " + key + " значение: " + this[key]);
      }
      if (typeof this[key] === "object") {
        console.log(
          "ключ: " + key + " значение: " + JSON.stringify(this[key], null, 4)
        );
      }
    }
  },
};
appData.init();

"use strict";

const time = function () {
  let date = new Date();
  let now = new Date().toLocaleString("ru", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  function num_word(value, words) {
    value = Math.abs(value) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  }
  let dateNow =
    "Сегодня " +
    now +
    " " +
    date.getFullYear() +
    " года, " +
    date.getHours() +
    num_word(date.getHours(), [" час ", " часа ", " часов "]) +
    date.getMinutes() +
    " минут " +
    date.getSeconds() +
    " секунд";

  console.log(dateNow);
};
time();

const bTime = function () {
  let date = new Date();
  function getZero(num) {
    if (num > 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  console.log(
    getZero(date.getDate()) +
      "." +
      getZero(date.getMonth() + 1) +
      "." +
      date.getFullYear() +
      " - " +
      date.getHours() +
      ":" +
      date.getMinutes() +
      ":" +
      date.getSeconds()
  );
};
bTime();

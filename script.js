"use strict";


let str =
  "asdasdasdasasasasasasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const setArgument = function () {
  if (typeof str != "string") {
    return "Введена не строка";
  } else {
    str = str.trim();
    if (str.length > 30) {
      str = str.slice(0, 30) + "...";
      return str;
    } else return "Попробуйте еще раз";
  }
};

alert(setArgument());

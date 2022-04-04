"use strict";


function game() {
  let min = 1;
  let max = 100;
  let attempt = 10;
  let result;
  let num = Math.floor(Math.random() * (max - min)) + min;
  console.log(num);
  function run() {
    let userNum = prompt("Угадай число от 1 до 100");
    if (attempt < 1) {
      alert("Попытки кончились! Игра окончена");
    } else if (isNaN(userNum)) {
      alert("Введите число!");
      run();
    }
    if (userNum === null) {
      alert("Игра окончена, до свидания!");
    }

    if (parseInt(userNum) > num) {
      attempt--;
      alert("Загаданное число меньше, осталось попыток " + attempt);
      run();
    } else if (parseInt(userNum) < num) {
      attempt--;
      alert("Загаданное число больше, осталось попыток " + attempt);
      run();
    } else if (parseInt(userNum) === num) {
      resalt = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if(resalt === true) game();
      else alert("Игра окончена, до свидания!");
          
    }
  }
  run();
}
game();



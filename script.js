const btn = document.getElementById("btn"); 
btn.addEventListener("click", function () {  
  const input = document.querySelector("input[type=text]"); // создаю переменую imput для ввода цвета
  const squre = document.querySelector("#square"); // создаю переменнкю по поиску квадрата
  squre.style.backgroundColor = input.value; // меняем цвет квадрата заданного в поле
});

const e_btn = document.querySelector("#e_btn");
e_btn.style = "display: none";

const range = document.getElementById("range");
// вешаю на кнопку события input
range.addEventListener("input", function () {
  //передаю значение
  const value = range.value;
  const circle = document.querySelector("#circle");// создаю переменнкю по поиску круга
  // получаю ширину и высоту
  circle.style.width = value + "%";
  circle.style.height = value + "%";
  const span = document.querySelector("#range-span");
  span.textContent = value;
});


//Практика из урока
// const btn = document.querySelector("#e_btn");
// const circle = document.querySelector("#circle");
// const square = document.querySelector("#square");

// const toggle = function (event) {
//   //перехват
//   //   event.stopPropagation();
//   console.log(
//     "Событие сработало на " +
//       event.target.id +
//       " и перенеслось на " +
//       event.currentTarget.id
//   );
//   event.target.classList.toggle("green");
// };

// btn.addEventListener("click", toggle, true);
// circle.addEventListener("click", toggle, true);
// square.addEventListener("click", toggle, true);
// const link = document.querySelector("a");
// link.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("клик по ссылке");
// });
// document.addEventListener("contextmenu", function (event) {
//   //блокировка события
//   event.preventDefault();
//   console.log("Где меню, Лебовски?");
// });

//вызов кнопи
// //const btn = document.getElementById("btn");
// const range = document.getElementById("range");
// const span = document.getElementById("range-span");

// const logger = function (event) {
//   console.log(event.type);
//   span.textContent = event.target.value;
// };
// //range.addEventListener("input", logger);

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM построен");
// });

// // window.onbeforeunload = function () {
// //   return "Вы уверены что хотите уйти с данной страницы";
// // };
// range.addEventListener("change", logger);
// //отображет количество введенных символов
// text.addEventListener("input", logger);
// //отображает количество фокусоровок курсора
// text.addEventListener("focus", logger);
// //отображается при потере курсора
// text.addEventListener("blur", logger);
// //
// text.addEventListener("change", logger);

// square.addEventListener("click", logger);

// square.addEventListener("mouseenter", logger);
// square.addEventListener("mouseleave", logger);
//реагируют на вложенные элементы
// square.addEventListener("mouseover", logger);
// square.addEventListener("mouseout", logger);

//let counter = 0;

//const square = document.getElementById("square");
// const logger = function () {
//   counter++;
//   if (counter === 3) {
//     square.removeEventListener("click", logger);
//   }
//   console.log(counter);
//   console.log("Клик по квадрату");
// };

//удаление элемента
//square.removeEventListener("click", logger);

//console.log(btn);
//Нажатие на кнопку
// btn.onclick = function () {
//   alert("Клик по кнопке");
// };

// square.addEventListener("click", function () {
//   console.log("Клик по квадрату!");
// });

// square.addEventListener("click", function () {
//   console.log("Клик по квадрату! 2");
// });
// const logger1 = function () {
//   console.log("Клик по квадрату!!!!!");
// };
// //Нажатие на кнопку
// square.onclick = function () {
//   logger();
//   logger1();
// };

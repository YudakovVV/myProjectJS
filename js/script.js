"use strict";

const DomElement = function (selector, height, width, background, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.background = background;
  this.fontSize = fontSize;
};

DomElement.prototype.Create = function () {
  let newElemnt;
  if (this.selector[0] === ".") {
    newElemnt = document.createElement("div");
    newElemnt.classList.add(this.selector);
    newElemnt.innerHTML = "<h1>Hello!</h1>";
    newElemnt.style.cssText =
      "height: " +
      this.height +
      "; \
                width: " +
      this.width +
      "; \
                background: " +
      this.background +
      "; \
                font-size: " +
      this.fontSize;
  } else if (this.selector[0] === "#") {
    newElemnt = document.createElement("p");
    let idStr = newElemnt.id;
    newElemnt.id = this.selector;
    newElemnt.innerHTML = "<h1>Hello!</h1>";
    newElemnt.style.cssText =
      "height: " +
      this.height +
      "; \
                  width: " +
      this.width +
      "; \
                  background: " +
      this.background +
      "; \
                  font-size: " +
      this.fontSize;
  } else console.log("Укажите селектор");
  document.body.append(newElemnt);
};

let domElement = new DomElement(".best", "100px", "150px", "red", "20px");
domElement.Create();
console.log(domElement);

// //// Прмер 3 Конструктор/////

// //создаем конструктор
// const Person = function (name) {
//   this.name = name;
// };

// Person.prototype.sayHello = function () {
//   console.log("Привет, меня зовут " + this.name);
// };

// const Student = function (name, role) {
//   Person.call(this, name);
//   this.role = role;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// const newStudent = new Student("Vlad", "student");
// console.log(newStudent);

// const person1 = new Person("Vlad");
////принадлежность к конструктору
// console.log(person1 instanceof Person);
////Пример 2 прототипы////
// const worker = {
//   workplace: 1,
//   dinner: 1,
//   goToWork: function () {
//     console.log("Иду на работу");
//   },
//   leaveWork: function () {
//     console.log("Ухожу с работы");
//   },
//   work: function () {
//     console.log("Работаю");
//   },
//   //метод
//   sayHello: function () {
//     console.log("Привет меня зовут " + this.name);
//   },
// };
// const frontEndDev = Object.create(worker);
// const backEndDev = Object.create(worker);

// frontEndDev.dinner = 2;

// frontEndDev.role = "Front End Developer";
// backEndDev.role = "Back End Developer";

// frontEndDev.work = function () {
//   console.log("Пишу качественный фронт, кушаю печеньки!^^");
// };
// backEndDev.work = function () {
//   console.log("Мучаюсь с базами данных, дайте выходной!");
// };

// const developer1 = Object.create(frontEndDev);
// const developer2 = Object.create(frontEndDev);
// const developer3 = Object.create(backEndDev);
// const developer4 = Object.create(backEndDev);

// developer1.name = "Alex";
// developer2.name = "Vlad";
// developer3.name = "Max";
// developer4.name = "Ivan";

// //проверка есть ли у объектка свойство name
// console.log(developer1.hasOwnProperty("name"));

// console.log(frontEndDev.isPrototypeOf(developer3));

// console.log(developer1);
// console.log(developer2);
// console.log(developer3);
// console.log(developer4);

// developer1.sayHello();
// developer2.sayHello();
// developer3.sayHello();
// developer4.sayHello();

//////////////пример1/////////////
// const man = {
//   hand: 2,
//   lags: 2,
//   eyes: 2,
//   walk: function () {
//     console.log("Я хожу");
//   },
//   talk: function () {
//     console.log("Я говорю");
//   },
// };
// //наследование свойств от man
// const newMan = Object.create(man);
// const newWoman = Object.create(man);

// newMan.name = "Vlad";
// newMan.age = 29;

// newWoman.name = "Evgenia";
// newWoman.age = 25;

// console.log(newMan);
// console.log(newWoman);

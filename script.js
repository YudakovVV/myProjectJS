"use strict";

class First {
  sayHello() {
    console.log("Привет! Я метод родителя");
  }
}

class Second extends First {
  sayHello() {
    super.sayHello(); //связб между классами
    console.log("А я наследуемый метод!");
  }
}

const start = new First();
const finish = new Second();
finish.sayHello();

//деструктуризация
//пример1
// const user = {
//   name: "VLad",
//   age: 29,
//   inAuth: false,
//   projects: {
//     firstProject: "firstProject",
//     secondProject: "secondProject",
//   },
// };

// // const name = user.name;
// // const age = user.age;
// // const inAuth = user.inAuth;

// const {
//   name,
//   age,
//   inAuth,
//   projects,
//   projects: { firstProject, secondProject },
// } = user; //через диструктуризацию
// console.log(name);
// console.log(age);
// console.log(inAuth);
// console.log(projects);

//пример2
// const names = ["Artem", "Vlad", ["Alex", "Max"]];

// // const art = names[0];
// // const max = names[3];
// // console.log(art);

// const [art, vlad, [alex, max]] = names;
// console.log(art);
// console.log(vlad);
// console.log(alex);
// console.log(max);
//Пример 3
// const logger = ({ first, second, third }) => {
//   console.log(second);
// };
// logger({ first: "I", second: "love", third: "JavaScript" });

//REST and SPRED
//параметр rest(...)
// const sum = (...params) => {
//   return params.reduce((sum, num) => sum + num);
// };
// console.log(sum(42, 25, 58, 12, 125, 5555));
//параметр spred(совмещает 2 массива)
// const firstAr = [1, 2, 3, 4];
// const secondAr = [5, 6, 7, 8];
// console.log([12,444,...firstAr,555, ...secondAr]);

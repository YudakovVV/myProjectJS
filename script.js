let title = "lesson02";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 200;
let rollback = 20;
let fullPrice = 30000;
let adaptive = true;
let lowerCase = screens.toLowerCase();
let arr = lowerCase.split(",");
let persInter = fullPrice * (rollback / 100);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани"
);
console.log(arr);
console.log(persInter);


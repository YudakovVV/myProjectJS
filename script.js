let lang = prompt("Введите язык отображения", "ru,en");
if (lang == "ru"){
  arr = console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
}
else console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");

lang = prompt("Введите язык отображения", "ru,en");
switch(lang){
  case "ru": 
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
    break;
  case "en": 
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
    break;
}

lang = prompt("Введите язык отображения", "ru,en");


let namePerson = prompt("Введите имя", "Артем, Александр");
let resalt = (namePerson == "Артем") ? "директор": (namePerson == "Александр") ? "учитель" : "студент";
console.log(resalt);
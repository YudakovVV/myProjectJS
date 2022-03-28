let lang = prompt("Введите язык отображения", "ru,en");
let arr;
let numDey = +prompt("Введите номер дня недели", "1 - 7");
if (lang == "ru"){
  lang = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
  console.log(lang);
  arr = lang.split(", ");
  numDey = numDey - 1;
  console.log(arr[numDey]);
  
}
else 
  lang = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
  console.log(lang);
  arr = lang.split(", ");
  numDey = numDey - 1;
  console.log(arr[numDey]); 

lang = prompt("Введите язык отображения", "ru,en");
numDey = +prompt("Введите номер дня недели", "1 - 7");
switch(lang){
  case "ru": 
    lang = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
    console.log(lang);
    arr = lang.split(", ");
    numDey = numDey - 1;
    console.log(arr[numDey]);
    break;
  case "en": 
    lang = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";
    console.log(lang);
    arr = lang.split(", ");
    numDey = numDey - 1;
    console.log(arr[numDey]);
    break;
}

lang = prompt("Введите язык отображения", "ru,en");
arr = [];
arr['ru'] = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
arr['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(arr[lang]);

let namePerson = prompt("Введите имя", "Артем, Александр");
let resalt = (namePerson == "Артем") ? "директор": (namePerson == "Александр") ? "учитель" : "студент";
console.log(resalt);
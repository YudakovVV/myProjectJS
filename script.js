'use strict'

let MyDate = new Date(),
    MyHours = MyDate.getHours(),
    elements = document.getElementById('time'),
    name = elements.innerHTML;
switch (true) {
    case (MyHours >= 5) && (MyHours < 11): elements.innerHTML = 'Доброе утро, ' + name;
        break;
    case (MyHours >= 11) && (MyHours < 16): elements.innerHTML = 'Добрый день, ' + name;
        break;
    case (MyHours >= 16) && (MyHours <= 23): elements.innerHTML = 'Добрый вечер, ' + name;
        break;
    case (MyHours >= 0) && (MyHours < 5): elements.innerHTML = 'Доброй ночи, ' + name;
        break;
    default: elements.innerHTML = 'Здравствуйте, ' + name;
        break;

}

const lang = navigator.language;
let date = new Date();
date = date.toLocaleString(lang, { weekday: 'long' })

let day = 'Сегодня: ' + date.charAt(0).toUpperCase() + date.slice(1); // получения названия дня недели

document.getElementById('day').innerHTML = day;


let time = new Date()
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;
if(hours<12) seconds = seconds + ' AM';
else seconds = seconds + ' PM';
let current = 'Текущее время - ' + hours + ':' + minutes + ':' + seconds
document.getElementById('current').innerHTML = current;



let timeEnd = new Date();
timeEnd = new Date(timeEnd.getFullYear() + 1, 0, 1);


let today = new Date();
today = Math.floor((timeEnd - today) / 1000);
let tsec = today % 60;
today = Math.floor(today / 60);
if (tsec < 10)
    tsec = '0' + tsec;
let tmin = today % 60;
today = Math.floor(today / 60);
if (tmin < 10)
    tmin = '0' + tmin;
let thour = today % 24;
today = Math.floor(today / 24);
let timestr = 'До нового года осталось: ' + today + " дней ";
document.getElementById('t').innerHTML = timestr;
window.setTimeout(time, 1000);


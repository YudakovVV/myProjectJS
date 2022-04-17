"use strict";

const books = document.querySelectorAll(".book");
const li = document.createElement("li");
const body = document.querySelector("body");
let adv = document.querySelector(".adv");

books[1].after(books[0]);
books[4].after(books[3]);
books[5].after(books[2]);

body.setAttribute("style", "background-image: url(./image/slide.jpg)");

let bookA = books[4].getElementsByTagName("a");
bookA[0].innerHTML = "Книга 3. this и Прототипы Объектов";

adv.parentNode.removeChild(adv);
let bookLi = books[0].getElementsByTagName("li");
bookLi[9].after(bookLi[2]);
bookLi[3].before(bookLi[7]);
bookLi[3].before(bookLi[6]);
// bookLi[3].after(bookLi[8]);

bookLi = books[5].getElementsByTagName("li");
console.log(bookLi);

bookLi[1].after(bookLi[9]);
bookLi[5].after(bookLi[3]);
bookLi[8].after(bookLi[6]);

bookLi = books[2].getElementsByTagName("li");
li.innerHTML = "Глава 8: За пределами ES6";
bookLi[9].before(li);

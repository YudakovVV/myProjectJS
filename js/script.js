const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const saveLocalStorage = function () {
  localStorage.setItem("toDoData", JSON.stringify(toDoData));
};

const getLocalStorage = function () {
  let a = localStorage.getItem("toDoData");
  if (a === null) {
    return [];
  } else {
    a = JSON.parse(a);
    return a;
  }
};

let toDoData = getLocalStorage();

const render = function () {
  saveLocalStorage();
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  toDoData.forEach(function (item, index) {
    const li = document.createElement("li");

    li.classList.add("todo-item");

    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      "</span >" +
      ' <div class="todo-buttons">' +
      ' <button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "  </div>";
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });

    li.querySelector(".todo-remove").addEventListener("click", function () {
      toDoData = toDoData.filter((item, i) => index !== i);
      render();
    });
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();

  const newToDo = {
    text: headerInput.value,
    completed: false,
  };

  if (headerInput.value === "") {
    return;
  }
  toDoData.push(newToDo);
  headerInput.value = "";
  render();
});
render();

const form = document.querySelector("form");
const todoInput = document.querySelector("#todo");
const todos = document.querySelector("#todos");
const btn = document.querySelector("button");
const todoarr = [];
class Do {
  constructor(task) {
    this.task = task;
    this._completeOrNot = false;
  }

  set completeTask(x) {
    this._completeOrNot = x;
  }
}

const loopForToDos = () => {
  for (x of todoarr) {
    const li = document.createElement("li");
    li.id = todoarr.indexOf(x);

    if (x._completeOrNot) {
      li.style.backgroundColor = "#22bb33";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";
    deleteBtn.style.color = "white";
    deleteBtn.addEventListener("click", (e) => {
      todoarr.splice(e.target.parentNode.id, 1);
      todos.textContent = "";
      loopForToDos();
      console.log("after deleted:", todoarr);
    });

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.style.backgroundColor = "blue";
    completeBtn.style.color = "white";
    completeBtn.style.marginLeft = "50px";
    completeBtn.addEventListener("click", (e) => {
      li.style.backgroundColor = "#22bb33";
      li.style.color = "white";
      todoarr[e.target.parentNode.id].completeTask = true;
      console.log("after completed:", todoarr);
    });

    li.append(x.task, completeBtn, deleteBtn);
    todos.append(li);
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    todos.textContent = "";
    todoarr.push(new Do(todoInput.value));
    loopForToDos();
    todoInput.value = "";
    todoInput.focus();
    console.log("after added toDo:", todoarr);
  }
});



const form = document.querySelector(".jsform"),
input = form.querySelector("input"),
todolist =  document.querySelector(".list");

const TODO_LS = 'todo';

let todos=[];

// function filterFn(todo){
//   return todo.id === 1;
// }

function deleteTodo(event){
     // console.log(event.target.parentNode);
     const btn = event.target;
     const li = btn.parentNode;
     todolist.removeChild(li);
     // const cleanTodo = todos.filter(filterFn);
     // console.log(cleanTodo);
     const cleanTodo = todos.filter(function(todo){
       // console.log(todo.id, li.id);
       return todo.id !== parseInt(li.id);
     });
     console.log(cleanTodo);
     todos = cleanTodo;
     saveTodo();
}

function saveTodo(){
  localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function paintTodo(text){
   // console.log(text);
   const li = document.createElement("li");
   const del = document.createElement("button");
      del.innerText= "❌";
      del.addEventListener("click", deleteTodo);
   const span =  document.createElement("span");
      span.innerText = text;
   const newId = todos.length + 1;

   li.appendChild(span);
   li.appendChild(del);
   li.id = newId;
   todolist.appendChild(li);
   const todoObj = {
     text : text,
     id : newId
     // id : todos.length + 1
   };
   todos.push(todoObj);
   saveTodo();
   // console.log(todos);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  paintTodo(currentValue);
  input.value = "";
}
// function something(todo){
//   console.log(todo.text);
// };


function loadTodo(){
  const todo = localStorage.getItem(TODO_LS);
  if(todo !== null){
    // console.log(todo);
    const parsetodo = JSON.parse(todo);
    // console.log(parsetodo);
    parsetodo.forEach(function(todo) {
      // console.log(todo.text);
      paintTodo(todo.text);
    });
    // parsetodo.forEach(something);
  }
}

function init(){
  loadTodo();
  form.addEventListener("submit", handleSubmit)
}
 init();

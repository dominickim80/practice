
const form = document.querySelector(".jsform"),
 input = form.querySelector("input"),
 pprac1 = document.querySelector(".jspprac1");

const USER_LS = "currentUser",
SHOWING_ON ="showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = input.value;
  // console.log(currentValue);
  paintGretting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text){
  form.classList.remove(SHOWING_ON);
  pprac1.classList.add(SHOWING_ON);
pprac1.innerText = `Hello ${text}`
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
     // she is not
  }else {
    //shie is
    paintGretting(currentUser);
  }
}

function init(){
loadName();
}

init();

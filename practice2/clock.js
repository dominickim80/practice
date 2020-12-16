const clockBoite1 = document.querySelector(".hor");
const clockSujet1 = clockBoite1.querySelector("h2");

function tempss(){
const aujourdhui1 = new Date();
const hours1 = aujourdhui1.getHours();
const minutes1 = aujourdhui1.getMinutes();
const seconds1 = aujourdhui1.getSeconds();
// clockSujet.innerText= hours + ":" + minutes + ":" + seconds;
clockSujet1.innerText =
`${hours1 < 10 ? `0${hours1}` : hours1}:
${minutes1 < 10 ? `0${minutes1}` : minutes1}:
${seconds1 < 10 ? `0${seconds1}` : seconds1}`;

}
tempss();
setInterval(tempss, 1000);

//====================================================

const clockBoite = document.getElementById("horloge");
var clockSujet = document.querySelector("h1");

function num(i){
  if( i < 10){
    i = "0" + i;
  }return i;
}

function temps(i){
const aujourdhui = new Date();
const hours = num(aujourdhui.getHours());
const minutes = num(aujourdhui.getMinutes());
const seconds = num(aujourdhui.getSeconds());
// clockSujet.innerText= hours + ":" + minutes + ":" + seconds;
clockSujet.innerText = `${hours}:${minutes}:${seconds}`;
document.getElementById('date').value = clockSujet.innerText;



}
temps();

setInterval(temps, 1000);

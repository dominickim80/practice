const API_KEY ='243b54be14fb1b66a224453b1e5a0a74';
const COORDS = 'coords';
const weather = document.querySelector(".weather");

function getWeather(lat, lon){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(response) {
//    console.log(response.json());
      return response.json();
  }).then(function (json) {
//    console.log(json);
      const temperature = json.main.temp;
      const location = json.name;
      weather.innerText = `${temperature} @ ${location}`;
  });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
//  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,longitude
    // latitude : latitude,
    // longitude : longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('Cant access geo location');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords === null){
      askForCoords();
  }else {
    const parseCoords = JSON.parse(loadedCoords);
  //  console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();

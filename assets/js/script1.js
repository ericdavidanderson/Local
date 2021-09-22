const api = {
  key: "e31eb4ef338aae6cc511d9e4d986f839",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let minmax = document.querySelector('.current .minmax');
  minmax.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

var datetime = document.createElement('p');
document.getElementById('datetime')

// having trouble with this just taken from stack overflow as a starter
function datetime() {
  var now     = new Date(); 
  var year    = now.getFullYear();
  var month   = now.getMonth()+1; 
  var day     = now.getDate();
  var hour    = now.getHours();
  var minute  = now.getMinutes();
  if(month.toString(datetime).length == 1) {
       month = '0'+month;
  }
  if(day.toString(datetime).length == 1) {
       day = '0'+day;
  }   
  if(hour.toString(datetime).length == 1) {
       hour = '0'+hour;
  }
  if(minute.toString(datetime).length == 1) {
       minute = '0'+minute;
  }   
  var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute;   
   return dateTime;
   console.log(dateTime);

}

setInterval (datetime)
{
  currentTime = datetime();
  document.datetime("Date & Time").innerHTML = currentTime;
} 1000;



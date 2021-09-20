var cityName = document.getElementById("city");

var eventEl = document.getElementById("events-container");
var eightDay = document.getElementById("dailyForecast");

var responseText = document.getElementById("responseText");

function displayWeather(data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var date = data[i].dt;
    var newDate = new Date(date * 1000);
    iconCode = data[i].weather[0].icon;
    eightDay = data[i].weather[0].main;
    morningTemp = Math.round(data[i].temp.morn);
    eveTemp = Math.round(data[i].temp.eve);

    var weatherContainer = document.createElement("contianer");
    document.getElementById("date").appendChild(weatherContainer);
    weatherContainer.setAttribute("class", "weatherCard");

    var wCard = document.createElement("div");
    wCard.textContent = newDate;
    weatherContainer.appendChild(wCard);
    wCard.setAttribute("class", "date");

    var weatherIcon = document.createElement("img");
    weatherIcon.src = "http://openweathermap.org/img/wn/" + iconCode + ".png";
    document.getElementById("date").appendChild(weatherIcon);
    weatherIcon.setAttribute("class", "wImage");

    var conditions = document.createElement("div");
    conditions.textContent = eightDay;
    document.getElementById("date").appendChild(conditions);
    conditions.setAttribute("class", "wConditions");

    var amTemp = document.createElement("div");
    amTemp.textContent = "Morning Temperature: " + morningTemp;
    document.getElementById("date").appendChild(amTemp);
    amTemp.setAttribute("class", "earlyTemp");

    var pmTemp = document.createElement("div");
    pmTemp.textContent = "Evening Temperature: " + eveTemp;
    document.getElementById("date").appendChild(pmTemp);
    pmTemp.setAttribute("class", "eveTemp");

    console.log(newDate, weatherIcon, eightDay, morningTemp, eveTemp);
  }
}

function getWeather() {
  var apiRequest =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName.value +
    "&appid=15a2f6e975005b96c0df56340849949d&units=imperial";
  console.log(apiRequest);
  fetch(apiRequest)
    .then(function (res) {
      return res.json();
    })

    .then(function (response) {
      console.log(response);
      console.log(response.name);
      gps(response.coord.lat, response.coord.lon);
    });
}
function gps(lat, long) {
  var apiRequest =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    long +
    "&exclude=minutely,hourly,alerts&appid=15a2f6e975005b96c0df56340849949d&units=imperial";
  fetch(apiRequest)
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      console.log(response);
      displayWeather(response.daily);
    });
}
document.getElementById("submitCity").addEventListener("click", getWeather);

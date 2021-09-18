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

    var wCard = document.createElement("p");
    wCard.textContent = newDate;
    document.getElementById("date").appendChild(wCard);

    var weatherIcon = document.createElement("img");
    weatherIcon.src = "http://openweathermap.org/img/wn/" + iconCode + ".png";
    document.getElementById("date").appendChild(weatherIcon);
    
    var forecast = document.createElement('p');
    forecast.textContent = eightDay;
    document.getElementById('date').appendChild(forecast)

    var amTemp = document.createElement('p');
    amTemp.textContent = "Morning Temperature: "+ morningTemp;
    document.getElementById('date').appendChild(amTemp)

    var pmTemp = document.createElement('p');
    pmTemp.textContent = "Evening Temperature: " + eveTemp;
    document.getElementById('date').appendChild(pmTemp);

   


    var conditions = document.createElement("div");
    conditions.textContent = eightDay;
    var mornT = document.createElement("div");
    var eveT = document.createElement("div");
    

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


function displayEvents(data) {
  if (data.length === 0) {
    repoContainerEl.textContent = 'No events found.';
    return;
  };

  for (var i = 0; i < data.length; i++){
    // Need event API data for this
    var imgData = data[i]...
    var eventTitle = data[i]...
    var description = data[i]...

    //Create card div
    var card = document.createElement('div');
    card.setAttribute('class', 'card');
    
    //Create img element for card
    var img = document.createElement('img');
    img.setAttribute('src', imgData);

    // Create div container for event name and description in card.
    var container = document.createElement('div');
    container.setAttribute('class', 'container');
    
    // Create event name element
    var eventName = document.createElement('h4');
    eventName.setAttribute('class', 'event-title');
    eventName.textContent = eventTitle;
    
    // Create description element
    var eventDescrip = document.createElement('p');
    eventDescrip.setAttribute('class', 'event-description');
    eventDescrip.textContent = description;
    

    //Append elements for HTML
    card.appendChild(eventEl);
    img.appendChild(card);
    container.appendChild(card);
    eventName.appendChild(container);
    eventDescrip.appendChild(container);
  };

  
  

  
  
  
  
  

}

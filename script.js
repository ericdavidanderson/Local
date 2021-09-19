var cityName = document.getElementById('city')
var eventEl = document.getElementById("events-container")

var apiRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=15a2f6e975005b96c0df56340849949d";

var responseText = document.getElementById("response-text");

function getWeather() {
  fetch(apiRequest)
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      console.log(response.weather);
      if (response.status === 200) {
        responseText.textContent = response.status;
      } else {
        console.log("error");
      }
    });
};

document.getElementById("city").addEventListener("click", getWeather);

function displayEvents(data) {
  if (data.length === 0) {
    repoContainerEl.textContent = 'No events found.';
    return;
  };

  for (var i = 0; i < data.length; i++){
    // Need event API data for this
    var imgData = data[i].image
    var eventTitle = data[i].title
    var eventType = data[i].type

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
    eventDescrip.textContent = eventType;
    

    //Append elements for HTML
    card.appendChild(eventEl);
    img.appendChild(card);
    container.appendChild(card);
    eventName.appendChild(container);
    eventDescrip.appendChild(container);
  };

  
  

  
  
  
  
  

}


/*fetch("https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=HPZIF4FZ4MH6GHDUGS&redirect_uri=http://localhost:8080/oauth/redirect?code=BLWQJCQ5Q6U2YDRZF2H3", {
	"method": "GET",
  "credentials": 'same-origin',
	"headers": {
		"x-rapidapi-host": "eventbrite-com.p.rapidapi.com",
		"x-rapidapi-key": "f4495e1a1amsh0b298db8a29de74p1d310djsnf4d3e4281233"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
*/

/*	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://seatgeek-seatgeekcom.p.rapidapi.com/taxonomies",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "seatgeek-seatgeekcom.p.rapidapi.com",
			"x-rapidapi-key": "f4495e1a1amsh0b298db8a29de74p1d310djsnf4d3e4281233"
		}
	};
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
   */
	/*const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://seatgeek-seatgeekcom.p.rapidapi.com/events",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "seatgeek-seatgeekcom.p.rapidapi.com",
			"x-rapidapi-key": "f4495e1a1amsh0b298db8a29de74p1d310djsnf4d3e4281233",
			"Access-Control-Allow-Origin": "*"
		}
	};
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
*/

var clientID = 'MjMzNzgxODJ8MTYzMTc2MDYyMS4wNjM0OTEz';
var clientSecret = 'c94dd83f29783aec2810034b6e20d912b5b513475272fda1a8df684c3469608';
var cityName = document.getElementById("city");

fetch("https://api.seatgeek.com/2/events?venue.city=" + cityName.value + "&client_id=MjMzNzgxODJ8MTYzMTc2MDYyMS4wNjM0OTEz", {
        "method": "GET",
      })
        .then(response => {
          return response.json();
        }).then(response => {
          console.log(response)
		  renderEvents(response)
        })
        .catch(err => {
          console.error(err);
        });


function renderEvents(response) {
	const eventsContainer = document.getElementById("Events")
	for (let i = 0; i < 10; i++) {
		const stadium = response.events[i].venue.name;
		const eventTitle = response.events[i].title;
		const eventCategory = response.events[i].type;
		const dateTime = response.events[i].datetime_local;
		const image = response.events[i].performers[0].image;

		const date = dateTime.split("T", 1);
		const time = dateTime.split("T").pop();
		

		const cardContainer = document.createElement("div");
		const cardName = document.createElement("h2");
		const cardStadium = document.createElement("p");
		const cardCategory = document.createElement("p");
		const cardDate = document.createElement("p");
		const cardTime = document.createElement("p");
		const cardImage = document.createElement("img");

		

		cardName.textContent = eventTitle;
		cardCategory.textContent = eventCategory;
		cardStadium.textContent = stadium;
		cardDate.textContent = date;
		cardTime.textContent = time;
		cardImage.textContent = image;

		cardContainer.append(cardName);
		cardContainer.append(cardStadium);
		cardContainer.append(cardCategory);
		cardContainer.append(cardDate);
		cardContainer.append(cardTime);
		cardContainer.append(cardImage);

		eventsContainer.append(cardContainer);
		
	}
	
	
}
	
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

    var weatherContainer =document.createElement("contianer");
    document.getElementById('date').appendChild(weatherContainer);
    weatherContainer.setAttribute("class", "weatherCard");

    var wCard = document.createElement("div");
    wCard.textContent = newDate;
    weatherContainer.appendChild(wCard);
    wCard.setAttribute("class", "date");

    var weatherIcon = document.createElement("img");
    weatherIcon.src = "http://openweathermap.org/img/wn/" + iconCode + ".png";
    document.getElementById("date").appendChild(weatherIcon);
    weatherIcon.setAttribute("class", "wImage");
    
    var conditions = document.createElement('div');
    conditions.textContent = eightDay;
    document.getElementById('date').appendChild(conditions);
    conditions.setAttribute('class', 'wConditions');

    var amTemp = document.createElement('div');
    amTemp.textContent = "Morning Temperature: "+ morningTemp;
    document.getElementById('date').appendChild(amTemp);
    amTemp.setAttribute('class', 'earlyTemp');

    var pmTemp = document.createElement('div');
    pmTemp.textContent = "Evening Temperature: " + eveTemp;
    document.getElementById('date').appendChild(pmTemp);
    pmTemp.setAttribute('class', 'eveTemp');

    

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

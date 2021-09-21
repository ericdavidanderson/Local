
var cityName = document.getElementById('city')
var eventEl = document.getElementById("events-container")



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

function seatGeek () {
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
        })
      };


function renderEvents(response) {
	const eventsContainer = document.getElementById("events-container")
	for (let i = 0; i < 10; i++) {
		const stadium = response.events[i].venue.name;
		const eventTitle = response.events[i].title;
		const eventCategory = response.events[i].type;
		const dateTime = response.events[i].datetime_local;
		const image = response.events[i].performers[0].image;

		const date = dateTime.split("T", 1);
		const time = dateTime.split("T").pop();
		

		const cardContainer = document.createElement("div");
    cardContainer.setAttribute('class', 'cardContainer');
		const cardName = document.createElement("h2");
    cardName.setAttribute('class', 'eventName');
		const cardStadium = document.createElement("p");
    cardStadium.setAttribute('class', 'eventLocation');
		const cardCategory = document.createElement("p");
    cardCategory.setAttribute('class', 'eventCategory');
		const cardDate = document.createElement("p");
    cardDate.setAttribute('class', 'eventTime');
		const cardTime = document.createElement("p");
    cardTime.setAttribute('class', 'eventTime');
		const cardImage = document.createElement("img");
    cardImage.setAttribute('class', 'eventImg');

		

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

var eightDay = document.getElementById("dailyForecast");
// 3bedb152d0a7d16bd32c036b2c92077432c63fbf

var apiRequest = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=15a2f6e975005b96c0df56340849949d";


var responseText = document.getElementById("response-text");

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
// >>>>>>> 3bedb152d0a7d16bd32c036b2c92077432c63fbf

function getWeather() {
  fetch(apiRequest)
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      console.log(response.weather);
      displayWeather(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      } else {
        console.log("error");
      }
    });
};

document.getElementById("city").addEventListener("click", getWeather());
document.getElementById('city').addEventListener('click,', apiRequest());

// function displayEvents(data) {
//   if (data.length === 0) {
//     repoContainerEl.textContent = 'No events found.';
//     return;
//   };

//   for (var i = 0; i < data.length; i++){
//     // Need event API data for this
//     var imgData = data[i].image
//     var eventTitle = data[i].title
//     var eventType = data[i].type

//     //Create card div
//     var card = document.createElement('div');
//     card.setAttribute('class', 'card');
    
//     //Create img element for card
//     var img = document.createElement('img');
//     img.setAttribute('src', imgData);

//     // Create div container for event name and description in card.
//     var container = document.createElement('div');
//     container.setAttribute('class', 'container');
    
//     // Create event name element
//     var eventName = document.createElement('h4');
//     eventName.setAttribute('class', 'event-title');
//     eventName.textContent = eventTitle;
    
//     // Create description element
//     var eventDescrip = document.createElement('p');
//     eventDescrip.setAttribute('class', 'event-description');
//     eventDescrip.textContent = eventType;
    

//     //Append elements for HTML
//     card.appendChild(eventEl);
//     img.appendChild(card);
//     container.appendChild(card);
//     eventName.appendChild(container);
//     eventDescrip.appendChild(container);
//   };

  


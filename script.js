

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
	
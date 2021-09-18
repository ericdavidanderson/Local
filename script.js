var cityName = document.getElementById('city')
var eventEl = document.getElementById("events-container")

var responseText = document.getElementById("responseText");

function getWeather() {
  var apiRequest =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName.value +
    "&appid=15a2f6e975005b96c0df56340849949d&units=imperial";
  console.log(apiRequest);
  fetch(apiRequest)
    .then(function (res) {
      return res.json();
    })
    .then(function (response) {
      console.log(response);
      responseText.textContent = response.list[0].main.feels_like;
      console.log(response.city.name);
    });
}
<<<<<<< HEAD
document.getElementById("city").addEventListener("click", getWeather);

var heroShinker = function () {
  var hero = $(".hero-nav"),
      heroHeight = $(".hero-nav").outerHeight(true);
  $(hero).parent().css("padding-top", heroHeight);
  $(window).scroll(function () {
      var scrollOffset = $(window).scrollTop();
      if (scrollOffset < heroHeight) {
          $(hero).css("height", heroHeight - scrollOffset);
      }
      if (scrollOffset > heroHeight - 215) {
          hero.addClass("fixme");
      } else {
          hero.removeClass("fixme");
      }
  });
};
heroShinker();
=======
document.getElementById("submitCity").addEventListener("click", getWeather);
document.getElementById("city").addEventListener("click", getWeather);

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
>>>>>>> de52f341ed69e2fab5baa62f11fbc8d8ddbb9829

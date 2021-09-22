var clientID = 'MjMzNzgxODJ8MTYzMTc2MDYyMS4wNjM0OTEz';
var clientSecret = 'c94dd83f29783aec2810034b6e20d912b5b513475272fda1a8df684c3469608';
var cityName = document.getElementById("city");
var searchHistory = JSON.parse(localStorage.getItem(cityName)) || [];
var clearBtn = document.getElementById('clear');

console.log(searchHistory);

function getEvents() {
  fetch("https://api.seatgeek.com/events?venue.city=" + cityName.value + "&client_id=MjMzNzgxODJ8MTYzMTc2MDYyMS4wNjM0OTEz", {
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
}
function renderEvents(response) {
  const eventsContainer = document.getElementById("Events")
  eventsContainer.textContent = "";
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
    const cardImage = document.createElement("IMG");


    var longDateStr = moment(date, 'YYYY-MM-DD').format('ddd, MMM D');


    let convertTime = time.split(':'); // convert to array

    // fetch
    var hours = Number(convertTime[0]);
    var minutes = Number(convertTime[1]);
    var seconds = Number(convertTime[2]);

    // calculate


    if (hours > 0 && hours <= 12) {
      convertTime = "" + hours;
    } else if (hours > 12) {
      convertTime = "" + (hours - 12);
    } else if (hours == 0) {
      convertTime = "12";
    }

    convertTime += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    convertTime += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
    convertTime += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

    cardName.textContent = eventTitle;
    cardCategory.textContent = eventCategory;
    cardStadium.textContent = stadium;
    cardDate.textContent = longDateStr;
    cardTime.textContent = convertTime;
    cardImage.src = image;

    cardContainer.append(cardName);
    cardContainer.append(cardStadium);
    cardContainer.append(cardCategory);
    cardContainer.append(cardDate);
    cardContainer.append(cardTime);
    cardContainer.append(cardImage);
    eventsContainer.append(cardContainer);

  }


}

document.getElementById("submitCity").addEventListener("click", function (){
  getEvents();
  storageLocal();
});

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


function storageLocal() {
  var searchTerm = cityName.value
  searchHistory.push(searchTerm)
  localStorage.setItem('city', JSON.stringify(searchHistory));
  console.log(searchHistory);
  
  renderHistory();
};

clearBtn.addEventListener('click', function(){
  localStorage.setItem(searchHistory) = [];
  document.querySelector(".list-group").innerHTML = "";
});


function renderHistory(){
  getList();
  // var historyEl = document.createElement('ul');
  // historyEl.setAttribute('class', 'list-group')
  // document.getElementById('search-container').appendChild(historyEl);
  // for (var i = 0; i < searchHistory.length; i++)
  //   var historyItem = document.createElement('li');
    
  //   historyItem.setAttribute('type', 'text');
  //   historyItem.setAttribute('value', searchHistory[i]);
  //   historyItem.setAttribute('class', 'list-group-item');
  //   historyItem.textContent = searchHistory[i];
  //   historyEl.appendChild(historyItem);
  //   console.log(historyItem);
};

heroShinker();

var getList = function() {
  //get the stored inofmation
  var list = JSON.parse(localStorage.getItem('city')) || [];
  var template = "";
  list.forEach(function(listItem) {
    template += `
      <li class="list-group-item">${listItem}</li>
    `;

    document.querySelector(".list-group").innerHTML = template;
  });
};


// set the localstorage to []

// document.querySelector(".list-group").innerHTML = "";
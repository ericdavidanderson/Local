var cityName = document.getElementById("city");

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
document.getElementById("submitCity").addEventListener("click", getWeather);

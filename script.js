var cityName = document.getElementById('city')

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
}
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
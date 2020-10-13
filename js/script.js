
function start() {
  const city = document.getElementById("city-input").value;
  const apiWeather = new API_WEATHER(city);

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      const data = response.data;

      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}


function getThreeDayForecast() {
  const city = document.getElementById("city-input").value;

  const apiWeather = new API_WEATHER(city);
  apiWeather
      .fetchTodayForecast()
  .then(function(response) {
    

    for (let i = 0; i < 4; i++) 
    {
      const data = response.data.list[i];
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.temp.day;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      document.querySelectorAll('#today-forecast-main')[i].innerHTML = main;
      document.querySelectorAll('#today-forecast-more-info')[i].innerHTML = description;
      document.querySelectorAll('#icon-weather-container')[i].innerHTML = icon;
      document.querySelectorAll('#today-forecast-temp')[i].innerHTML = `${temp}°C`;
      
    }

  })
      .catch(function(error) {
          // Affiche une erreur
          console.error(error);
      });
  return city;
}





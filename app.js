
const weatherApiKey = '1b5e358b58dd989e68f09ce5618321dd';
const city = document.getElementById('city');
user_input = prompt("Enter a city","london")
var weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${user_input}&appid=${weatherApiKey}&units=metric`;


const quoteApiUrl = 'https://.quotable.io/random';


function fetchWeather() {
  document.getElementById('weather-info').textContent = 'Loading weather data...';

  fetch(weatherApiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      return response.json();
    })
    .then(data => {
      const weatherInfo = `
        Location: ${data.name}
        Temperature: ${data.main.temp}°C
        Weather: ${data.weather[0].description}
      `;
      document.getElementById('weather-info').textContent = weatherInfo;
    })
    .catch(error => {
      document.getElementById('weather-info').textContent = 'Error: ${error.message}';
    });
}



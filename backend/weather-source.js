// Source Code

// This weatherRequest function fetches the latest temperature for a particular area from openweathermap API
// Args include the latitude & longitude of your location &
// units- unit in which we want the temperature (standard, metric, imperial)
// some example args: Salt Lake City {40.75, -111.87, imperial}, New York City {40.71, -74.00, imperial}, Honolulu Hawaii {21.31, -157.86, imperial}, Stockholm, Sweden {59.33, 18.06, imperial}

const latitude = args[0];
const longitude = args[1];
const unit = args[2];

if (!secrets.openWeatherApiKey) {
  throw Error("Weather API Key is not available!");
}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${secrets.apiKey}&units=${unit}`;

console.log(`Sending HTTP request to ${url}`);

const weatherRequest = Functions.makeHttpRequest({
  url: url,
  method: "GET",
});

const weatherResponse = await weatherRequest;
if (weatherResponse.error) {
  console.error(weatherResponse.error);
  throw Error("Request failed, try checking the params provided");
}

// Extract the temperature and convert it to an integer
const temperature = Math.round(weatherResponse.data.main.temp);

console.log("Weather response", weatherResponse);

// Return the temperature as a uint256 encoded value
return Functions.encodeUint256(temperature);

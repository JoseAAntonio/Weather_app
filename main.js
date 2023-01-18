//NOTE - variables and event selectors

const apiKey = "d00a2d1c7846aa440fc2c56553909abc";
const urlCountryApi = "https://countryflagsapi.com/png/";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search");

const cityEl = document.querySelector("#city");
const temperatureEl = document.querySelector("#temperature span");
const descriptionEl = document.querySelector("#description");
const weatherIconEl = document.querySelector("#weather-icon");
const countryEl = document.querySelector("#country");
const umidityEl = document.querySelector("#umidity span");
const windEl = document.querySelector("#wind span");

//NOTE - functions
getWeather = async (city) => {
	const apiWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
	const response = await fetch(apiWeatherUrl);
	const data = await response.json();

	console.log(data);
};

const showDataHandler = (e) => {
	e.preventDefault();
	const city = cityInput.value;

	getWeather(city);
};

//NOTE - Events
searchBtn.addEventListener("click", showDataHandler);

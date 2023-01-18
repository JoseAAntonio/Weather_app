//NOTE - variables and event selectors

const apiKey = "d00a2d1c7846aa4thatsNotMyKey40fc2c56553909abc";
const urlCountryApi = "https://flagsapi.com/BE/flat/64.png";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search");

const cityEl = document.querySelector("#city");
const temperatureEl = document.querySelector("#temperature");
const descriptionEl = document.querySelector("#description");
const weatherIconEl = document.querySelector("#weather-icon");
const countryEl = document.querySelector("#country");
const humidityEl = document.querySelector("#humidity span");
const windEl = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

//NOTE - functions
getWeather = async (city) => {
	const apiWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
	const response = await fetch(apiWeatherUrl);
	const data = await response.json();

	return data;
};

const showWeatherData = async (city) => {
	const data = await getWeather(city);

	cityEl.innerText = data.name;
	temperatureEl.innerText = parseInt(data.main.temp);
	descriptionEl.innerText = data.weather[0].description;
	weatherIconEl.setAttribute(
		"src",
		`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
	);
	countryEl.setAttribute(
		"src",
		`https://flagsapi.com/${data.sys.country}/flat/64.png`
	);
	humidityEl.innerText = `${data.main.humidity}%`;
	windEl.innerText = `${data.wind.speed}km/h`;

	weatherContainer.classList.remove("hide");
};

//NOTE - Events
searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const city = cityInput.value;
	city === "" ? window.alert("digite algo") : showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
	const city = e.target.value;
	e.code === "Enter" ? showWeatherData(city) : null;
});

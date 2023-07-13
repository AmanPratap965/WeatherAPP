
// all div id's required for

// search-box
// searchBtn
// city-name
// temperature
// precipitation
// day-weather

 const searchBox=document.getElementById("search-box");
const searchBtn=document.getElementById("searchBtn");
const cityName=document.getElementById("city-name");
const temperature=document.getElementById("temperature");
const wind=document.getElementById("wind");
const precipitation=document.getElementById("precipitation");
const dayWeather=document.getElementById("day-weather");

const API_KEY='0e67e7bc781649838f1200425230707'

WeatherData = (city) => {
	const url = 'http://api.weatherapi.com/v1/current.json';
	//HINT: Use template literals to create a url with input and an API key
	fetch(`${url}?key=${API_KEY}&q=${city}&aqi=yes`)
	.then(response=>response.json())
	.then(data=>{
		console.log(data);
		//printing the city Name
		cityName.innerText=data.location.name;
		//printing the weather conditions
		dayWeather.innerHTML=` <h5 id="day">${data.current.condition.text}</h5><img src='${data.current.condition.icon}'> `
		temperature.innerText="Temp: "+data.current.temp_c+"℃";
		wind.innerText="Wind: "+data.current.wind_kph+"kph";		
		precipitation.innerText="Rainfall: "+data.current.precip_mm+"mm";

	})
	.catch(err=>console.log(err));

  }
//calling through button
  searchBtn.onclick=()=>WeatherData(searchBox.value);
  



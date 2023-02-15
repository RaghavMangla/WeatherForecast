

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d85a3f17e3mshcc817866fa2fa83p1d5978jsndcc984f08623",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) =>{
    cityname.innerHTML=city;
fetch(
  'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    humidity.innerHTML = response.humidity;
    wind_speed.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value);
    console.log("changing");
})


getWeather("Delhi");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const apiKey = "ac110e4c2f99aecf1b649b43e73cc80b";
const api =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  

  async function checkWeather(city){
    const response = await fetch(api + city + `&appid=${apiKey}`);
    let data =await response.json();

    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
  })
   
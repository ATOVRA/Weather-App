const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");

changeLocation.city.focus()

// Loading
function Loading(boolen){
    if(boolen){
        overlay.classList.remove('d-none')
    }else{
        overlay.classList.add('d-none')
    }
}

// update UI
const ShowUI = (data) => {
  const { name, sys, weather, main } = data;
  details.innerHTML = `
        <h5 class="mb-3">${name} ${sys.country}</h5>
          <p class="mb-3">${weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(main.temp)}</span>
            <span>&deg;C</span>
        </div>
    `;

  weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

// get Weather
const getWeather = async (city) => {
  const data = await getData(city);
  return data;
};

// get location
changeLocation.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = changeLocation.city.value.trim();
  changeLocation.reset();
  getWeather(cityName).then((data) => {
    ShowUI(data);
  });
});

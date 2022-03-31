const btn = document.getElementById('btn');
const search = document.getElementById('searchUser')
const city = document.getElementById('city')
const feelsLike = document.getElementById('feelsLike')
const current = document.getElementById('current')
const min = document.getElementById('min')
const max = document.getElementById('max')
const temperature = document.getElementById('tempera')
btn.addEventListener("click", getWeather);
search.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      getWeather()
    }
});

async function  getWeather() {
let reply = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&lang=pt_br&appid=23702d1a64e58bc74e8cd3365105d132`);
let info = await reply.json();

city.innerHTML = (info.name);
current.innerHTML = (info.main.temp);
temperature.innerHTML = (info.main.temp);
feelsLike.innerHTML = (info.main.feels_like);
min.innerHTML = (info.main.temp_min);
max.innerHTML = (info.main.temp_max);
}
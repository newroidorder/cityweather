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

async function getWeather() {
let reply = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&lang=pt_br&appid=23702d1a64e58bc74e8cd3365105d132`);
let info = await reply.json();
city.innerHTML = (info.name);
current.innerHTML = parseInt(info.main.temp);
temperature.innerHTML = parseInt(info.main.temp);
feelsLike.innerHTML = parseInt(info.main.feels_like);
min.innerHTML = parseInt(info.main.temp_min);
max.innerHTML = parseInt(info.main.temp_max);
}


// dark mode
const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
  $html.classList.toggle('dark-mode')
})
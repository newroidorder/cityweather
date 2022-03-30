const btn = document.getElementById('btn');
const search = document.getElementById('searchUser')
const city = document.getElementById('city')
const feelsLike = document.getElementById('feelsLike')
const current = document.getElementById('current')
btn.addEventListener("click", getWeather, false)
search.addEventListener("keyup", getWeather);

async function  getWeather() {
let reply = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=23702d1a64e58bc74e8cd3365105d132`);
let info = await reply.json();
setTimeout(() => {
    city.innerHTML = (info.name);
current.innerHTML = (info.main.temp);
feelsLike.innerHTML = (info.main.feels_like);
}, 1500);

}
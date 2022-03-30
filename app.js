const btn = document.getElementById('btn');
const search = document.getElementById('searchUser')
const city = document.getElementById('city')
const feelsLike = document.getElementById('feelsLike')
const current = document.getElementById('current')
btn.addEventListener("click", getWeather, false)

function getWeather() {

console.log((fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&metric&appid=23702d1a64e58bc74e8cd3365105d132`,)))

}

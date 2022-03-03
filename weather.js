const btn = document.getElementsByTagName('button')[0]
const inp = document.getElementsByTagName('input')[0]
const w = document.getElementsByClassName('weather')[0]
// const h1 = document.getElementsByTagName('h1')[0]
const h2 = document.getElementsByTagName('h1')[1]
const h3 = document.getElementsByTagName('h1')[2]
const h4 = document.getElementsByTagName('h1')[3]
const h5 = document.getElementsByTagName('h1')[4]
const img = document.getElementById('img')
const body = document.getElementsByTagName('body')[0]
const container = document.getElementsByClassName('container')



// btn.onclick = () => {
//     w.innerText = 'Weather in ' + `${inp.value}`
// }
const weather = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e2546b4057f380b82447e55d4f7b52d`)
        .then(res => res.json())
        .then(data => displayWeather(data))
}
weather()

searchChange = () => {
    weather(inp.value)
}

btn.onclick = () => {
    searchChange()
}
// displayError = (data) =>{
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2e2546b4057f380b82447e55d4f7b52d`)
//     .then(res => res.json())
//     .then(data => displayWeather(data))
//     .catch(error => {
//         h5.innerText = 'error'
//     })
// }
    
// }

const displayWeather = (data) => {
    console.log(data.name);
    const { temp } = data.main
    const { speed } = data.wind
    const { humidity } = data.main
    w.innerText = `Weather in ${data.name}`
    h2.innerText = `Температура: ${Math.round(temp - 273) + 'C'}`
    h3.innerText = `Скорость ветра: ${speed} km/s`
    h4.innerText = `Влажность: ${humidity}%`
    img.innerHTML = `<img src = "http://openweathermap.org/img/w/${data.weather[0].icon}.png">`
    img.style.position = 'absolute'
    img.style.top = '180px'
    img.style.left  = '150px'
}
const background = [
    (`https://api.openweathermap.org/data/2.5/weather?q=osh&appid=2e2546b4057f380b82447e55d4f7b52d`),
    (`https://api.openweathermap.org/data/2.5/weather?q=china&appid=2e2546b4057f380b82447e55d4f7b52d`),
    (`https://api.openweathermap.org/data/2.5/weather?q=london&appid=2e2546b4057f380b82447e55d4f7b52d`),
    (`https://api.openweathermap.org/data/2.5/weather?q=paris&appid=2e2546b4057f380b82447e55d4f7b52d`)
]
if(inp.value === 'osh'){
    background[0].style.display = 'block'
}
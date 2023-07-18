// variable empty array to be filled with the searched city
var historyButton = document.getElementById("history-button")
var cities = []
var formSearch = document.getElementById("form-search");
if (localStorage.getItem("cities")){
        cities = JSON.parse(localStorage.getItem("cities"))
}
var searchButton = document.getElementById("search-button")
function displayWeather(cityName){
        // var to store API key obtained from the openweathermap website
        var weatherApiKey = "c0b347e4a7b9bf21c4df80d8171f4087" 
        //var to store API URL with current weather with query parameters concatenated (var formSearch, var weatherApiKey)
        // var to store the name of the city searched
        var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+weatherApiKey+"&units=imperial"  
        //var to store API URL with 5-day forecast with query parameters concatenated (var formSearch, var weatherApiKey)
        var forecastApi = "https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+weatherApiKey+"&units=imperial"
        
        // fetch to test the API key with the current day weather
        fetch(weatherApi)
        .then(function(response){
                return response.json();
        })
        //create function to link the data retrieved from current weather API to designated HTML elements
        .then(function(data){
                console.log(data);
                var selectedCity = document.getElementById("selected-city")
                selectedCity.textContent = "Today in: " + data.name
                        if (cities.includes(data.name) === false)  {
                                cities.unshift(data.name);
                                localStorage.setItem("cities", JSON.stringify(cities));   
                                createHistoryButton();                             
                        }
                var currentDate = document.getElementById("current-date")
                currentDate.textContent = dayjs.unix(data.dt).format("MM/DD/YYYY")
                var currentTemp = document.getElementById("current-temp")
                currentTemp.textContent = "Temp: " + data.main.temp + "°F"
                var currentWind = document.getElementById("current-wind")
                currentWind.textContent = "Wind: " + data.wind.speed + " MPH"
                var currentHumidity = document.getElementById("current-humidity")
                currentHumidity.textContent = "Humidity: " + data.main.humidity + "%"
                var currentSymbol = document.getElementById("current-symbol")
                currentSymbol.src= "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png"
        })
        
        // fetch to test the API key with the 5 day forecast
        fetch(forecastApi)
        .then(function(response){
                return response.json();
        })
        //create function to link the data retrieved from forecast weather API to designated HTML elements
        .then(function(data){
                console.log(data);
                var forecastDate = document.querySelectorAll(".date")
                var forecastTemp = document.querySelectorAll(".forecast-temp")
                var forecastWind = document.querySelectorAll(".forecast-wind")
                var forecastHumidity = document.querySelectorAll(".forecast-humidity")
                var forecastSymbol = document.querySelectorAll("#forecast-symbol")
                
                for (var i=2, j=0; i<data.list.length; i=i+8, j++) {
                        console.log(data.list[i])
                        var forecastData = data.list[i]
                        forecastDate[j].textContent= dayjs.unix(forecastData.dt).format("MM/DD/YYYY")
                        forecastTemp[j].textContent = "Temp: " + forecastData.main.temp + "°F"
                        forecastWind[j].textContent = "Wind: " + forecastData.wind.speed + " MPH"
                        forecastHumidity[j].textContent = "Humidity: " + forecastData.main.humidity + "%"
                        forecastSymbol[j].src= "https://openweathermap.org/img/wn/"+forecastData.weather[0].icon+"@2x.png"
                }
        })
}

function createHistoryButton() {
        historyButton.textContent = "";
        for (i=0; i<8; i++) {
                var button = document.createElement("button")
                button.setAttribute("class", "btn btn-secondary")
                button.textContent = cities[i]
                var br = document.createElement("br")
                historyButton.appendChild(button)
                historyButton.appendChild(br)
                historyButton.addEventListener("click", function(event) {
                var cityName = event.target.textContent;
                displayWeather(cityName);
                })
        }
}
createHistoryButton();

//command to run the function displayWeather when the user clicks on the search button
searchButton.addEventListener("click", function(event) {
        event.preventDefault()
        var cityName = formSearch.value;
        displayWeather(cityName);
})

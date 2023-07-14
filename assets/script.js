// var to store API key obtained from the openweathermap website
var weatherApiKey = "c0b347e4a7b9bf21c4df80d8171f4087" 
//var to store API URL with query parameters concatenated (latitude, longitude, var weatherApiKey)
var weatherApi = "https://www.api.openweathermap.org/data/2.5/forecast?lat="+{lat}+"&lon="+{lon}+"&appid="+weatherApiKey  
// fetch to test the API key
fetch(weatherApi)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })




















/* PSEUDOCODING

Create a weather dashboard with a 5-day forecast
All what was provided was the wire frame
Acceptance criteria:
1) We want current and future conditions for a city added search history (localStorage)
2) We want to display the city name, the date and icon representation of weather conditions, temperature, humidity, and wind speed
3) Display a 5-day forecast with the date, icon, weather conditions (temp, wind speed, and humidity)
4) (EventListener) When I click or search a city, it displays the history of the city that I searched


JAVASCRIPT
STEP 1: CREATE VARIABLES
        var cities = [] empty array
        var storeApiKey = to store our API (note: this is not standard practice, but needed for this project). Ex: var apiKey = "..."
        var base API global URL (query parameter) concatenate aditional parameters
        var currentDate
        var to request urls for APIs (two request url)

STEP 2: QUERY SELECTORS (to append returned information). 
        var currentDay
        var for search button(searchHistory/cityList/etc).   var searchButtonEl = document.querySelector("#id")
        var for search input field(for text field in the form)
        var form (for the input form itself)
        var 5DayForecast (where forecast will be appended)

        dynamically generated: 1 for each children (city&date / 5-day forecasts)

STEP 3: FUNCTIONS
        1st function: that gets saved info from local storage and saves it to array (var = store our lists of cities)
                - checks for data already saved (not null)
                        - localstorage.getItem
                                - conditional statement to check for null
                                        - if null, do nothing (as there is nothing to create)
                                        - if data is stored, set global variable of searchHistory to include saved data
                                                -call generate button function                

        2nd function: generate button (generates random (renders) cities from saved cities on search history)
                - clear current buttons (target parent div and clear info if there already)
                - loop over cities and generate elements on the page (can sort if wanted, not required)

        3rd function: needs event listener that calls the function to display the weather data
                - target the "search button"
                - creeate variable thsat holds the input
                - preventDefault()
                validate the text field has information
                        conditional statement
                                if text is entered, pull and display weather data
                                        if no text is entered, alert saying "please enter a city"
                save input data to the array
                        save to the array defined earlier
                                arrayname.push (sends to the array)
                                save to localStorage so the information persists upon refresh
                                generateButton to re-render buttons on the aside
                                call "fetch data function", pass the city searched to the "fetch data function"

        4rd function: create functions that will retrieve info from API servers: 1 functiomn for each of those. then call save function to append tot he list, and on ....
                - api call longiture latitude
                - append search history list
                - display weather
                - call for the date
                - call for icon
        4th function: create function that will handle the search input

        5th function: call to start application (will be at bottom)

STEP 4: EVENT LISTENERS
        onClick or onSubmit : call function that will handle search input






        from henry's notes:
        function getCoordinates(city) {
                //add the city to the url as a query parameter
                make a fetch request to the first api
                .then
                convert response to json
                .then
                extract the coordinates
        }

*/



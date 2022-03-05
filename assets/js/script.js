//current time & day in header
var currentDay = document.getElementById("currentDay"); 
var currentCity = document.getElementById("currentCity");
var city;
var apiKey = '7312f736322322a27fef229205b4ab79';
var searchForm = document.getElementById('search-box');
var searchCity = document.getElementsByClassName("form-control")[0];
var weatherToday = document.getElementById("today");
var fiveDay = document.getElementById("fiveDayForecast");
var historyForecast = document.getElementById("historyForecast");
var searchHistory = [];
var searchButton = document.getElementById("search-button");
var input = document.getElementById("city");
var lat;
var lon;
var mainPage = document.getElementById("mainPage");
var buttonPlaceholder = document.getElementById("buttonPlaceholder");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uv = document.getElementById("uv");
var savedCity;
var btnPlusDelete;


// updates time element on header
function displayTime(){
    var rightNow = moment().format ("dddd, MMMM Do YYYY, [at] h:mm:ss a");
    currentDay.textContent = rightNow;
}

setInterval(displayTime,1000);

// searchbar functionality
searchButton.addEventListener("click", function(){
    city = input.value.trim();
    if (city.includes(",")){
        var commas = city.split(",");
        getApi(commas[0]);
    } else {
        getApi(city);
    }
});

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        searchButton.click();
    }
});
makeButtons();

//function moves components to left side
function getApi(city) {
    document.getElementById("search").setAttribute("style", "width: 25%; padding: 0");
    searchButton.setAttribute("style", "width: 100%");
    input.setAttribute("style", "width: 100%");
    buttonPlaceholder.setAttribute("style", "width:100%");

    // the input field gets cleared
    input.value = "";



for (var i = searchHistory.length - 1; i >= 0; i--) {
btn
}


// fetch api URl then turn response into a json and show city and data 
var cityUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',&appid=' + apiKey;


// fetch request for city
fetch (cityUrl)
    .then(function(res) {
        // error message id city data doesn't pull up
        if (response.status !== 200) {
            alert("That city is not valid");
        }
        return response.json();
      })
      .then(function (data) {
        savedCity = data.name;
        // pulls correct current weather icon
        var iconcode = data.weather[0].icon;
        var iconURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('#weatherIcon').attr('src', iconURL);
        $('#currentIcon').find('.tooltiptext').text(data.weather[0].description);
        // main page is shown until button is clicked
        mainPage.className = "";
        // city gets saved
        currentCity.textContent = savedCity;
        // current date is shown 
        $("#currentDate").text(today.format("(MM/DD/YY)"));
        // conversions for temp and wind speed 
        var curCTemp = convertTemp(data.main.temp);
        var curKPH = convertSpeed(data.wind.speed);
        temp.textContent = "Temp: " + data.main.temp.toFixed() + "\xB0F / " + curCTemp + "\xB0C";
        wind.textContent = "Wind: " + data.wind.speed.toFixed() + " MPH / " + curKPH + " KPH";
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        // lat and onto eb pulled into OneCallAPI URL 
        lat = data.coord.lat;
        lon = data.coord.lon;
        fetchOneCall();
        // prevents redundant city buttons to be made 
        if(document.getElementById(savedCity)){
            return;
        }
        saveCities();  
        makeButtons(); 
    });
}




let cities = [];

// this API website naming syntax that calls for a city
function getCityWeather(city, isClicked) {}
    

    //  Calling the API
    

// console.log(getCityWeather)


// need to make a functional weather button
var btn = document.querySelector('.btn')

//For loop needed for 5-day forecast
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//working on code for loop 
// for (let i = 0; len=days.length; text = " ", i < len; i++)

//Search history function that will be added to left sidebar.
function listHistoryForecast() {
    historyForecast.innerHTML = x;
}
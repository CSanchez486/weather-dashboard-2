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


//Search history function that will be added to left sidebar.
function listHistoryForecast() {
    historyForecast.innerHTML = x;
}

for (var i = searchHistory.length - 1; i >= 0; i--) {
btn
}


// fetch api URl then turn response into a json and show city and data 
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',&appid=' + apiKey;

function fetchAPI () {

fetch (apiUrl)
    .then(function(res) {
        return res.json();
    }).then(function (data){
        renderItems(city, data);
    });
    // .catch(function(err){
    //     console.error("ERROR");
    // });

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
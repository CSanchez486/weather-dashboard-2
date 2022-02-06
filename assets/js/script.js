


var currentDay = document.getElementById("currentDay"); //current time & day in header
var apiKey = 'e4e829dc730191eee614fe35436601e0';
var searchForm = document.getElementById('search-box');
var searchCity = document.getElementsByClassName("form-control")[0];
var weatherToday = document.getElementById("today");
var fiveDay = document.getElementById("fiveDayForecast");
var historyForecast = document.getElementById("historyForecast");
var searchHistory = [];




// updates time element on header
function displayTime(){
    var rightNow = moment().format ("dddd, MMMM Do YYYY, [at] h:mm:ss a");
    currentDay.textContent = rightNow;
}

setInterval(displayTime,1000);

// searchbar functionality


//Search history function that will be added to left sidebar.
function listHistoryForecast () {
    historyForecast.innerHTML = '';
}

     
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + ',&appid=' + apiKey;

// fetch (apiUrl)
//     .then(function(response) {
//         return response.json();
//     }).then(function (data){
//         renderItems(searchCity,data);
//     })




let cities = [];

// this API website naming syntax that calls for a city
// function getCityWeather(city, isClicked) {
    

    //  Calling the API
    

// console.log(getCityWeather)


// need to make a functional weather button

//For loop needed for 5-day forecast
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//working on code for loop 
// for (let i = 0; len=days.length; text = " ", i < len; i++){ });


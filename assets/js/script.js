// double check if these are needed
// var resultText = document.querySelector


var currentDay = document.getElementById("currentDay");
var apikey = 'e4e829dc730191eee614fe35436601e0';
var searchForm = document.querySelector('.form-control');
var searchCity = document.getElementsByClassName("form-control")[0];
var weatherToday = document.getElementById("today");




// updates time element on header
function displayTime(){
    var rightNow = moment().format ("dddd, MMMM Do YYYY, [at] h:mm:ss a");
    currentDay.textContent = rightNow;
}

setInterval(displayTime,1000);

// side-bar functionality 

     
// var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',&appid=' + key;

// console.log(displayWeather)
// .input-group - is search bar


let cities = [];

// this API website naming syntax that calls for a city
// function getCityWeather(city, isClicked) {
    
//     fetch((apiUrl)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((m)))
//     }

    //  Calling the API
    

// console.log(getCityWeather)


// need to make a functional weather button

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



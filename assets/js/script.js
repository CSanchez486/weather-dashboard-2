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

function fetchOneCall() {
    // pulls the lat and lon of current city
    var uvUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=,minutely,hourly,alerts&appid=" + APIKey + "&units=imperial";
    // fetches UV and 5 day forecast data
    fetch(uvUrl)
    .then(function (response) {
        return response.json();
        })
    .then(function (data) {
        var tomorrow  = moment().add(1,'days');
        var twoDays  = moment().add(2,'days');
        var threeDays  = moment().add(3,'days');
        var fourDays  = moment().add(4,'days');
        var fiveDays  = moment().add(5,'days');

        // UV index for the day
        var todayUV = data.current.uvi;
            uv.textContent = todayUV;
        
        // if/else statement that determines color indicator based on UV index
        if (todayUV < 3) {
            uv.className = "favorable inline";
        } else if (todayUV >=3 && todayUV < 8) {
           uv.className = "moderate inline";
        } else {
            uv.className = "severe inline";
        }

        //Update the date for 5 day forecast
        $("#futuredate1").text(tomorrow.format("MM/DD/YY"));
        $("#futuredate2").text(twoDays.format("MM/DD/YY"));
        $("#futuredate3").text(threeDays.format("MM/DD/YY"));
        $("#futuredate4").text(fourDays.format("MM/DD/YY"));
        $("#futuredate5").text(fiveDays.format("MM/DD/YY"));
        
        //set the icon up in 5 day forecast 
        //For each icon..
        $("[data-icon]").each(function() {
            //num is the number of the icon 1-5
            var num = $(this).data("icon");
            //plug num in to get the code for the day's icon
            var iconCode = data.daily[num].weather[0].icon;
            //plus iconCode in to the url
            var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
            //set the src of the current day's icon to be the iconURL
            $(this).attr('src', iconURL);
            //set the span text to be the current weather conditions (tooltip)
            $(this).next().text(data.daily[num].weather[0].description);
        })

        // sets the temperature in the 5 day forecast
        $("[data-temp]").each(function() {
            var num = $(this).data("temp");
            // converts num to number of day for 5 day forecast
                var dailyCTemp = convertTemp(data.daily[num].temp.day);
                $(this).text("Temp: " + data.daily[num].temp.day.toFixed() + "\xB0F / " + dailyCTemp + "\xB0C");
        }
        )

        // sets the wind in the 5 day forecast
        $("[data-wind]").each(function() {
            var num = $(this).data("wind");
            var dailyKPH = convertSpeed(data.daily[num].wind_speed);
            $(this).text("Wind: " + data.daily[num].wind_speed.toFixed() + " MPH / " + dailyKPH + " KPH");
        })

        // sets the humid in the 5 day forecast
        $("[data-humidity]").each(function() {
            var num = $(this).data("humidity");
            $(this).text("Humidity: " + data.daily[num].humidity + "%");
        })
    });
}

// cities are saved to local storage
function saveCities() {
    cities = JSON.parse(localStorage.getItem("cities")) || [];

    var newCity = savedCity;
    cities.push(newCity);
    
    localStorage.setItem("cities", JSON.stringify(cities));
}

// button is made for each city that is searched
function makeButtons(){
    removeAllChildNodes(buttonPlaceholder);
    cities = JSON.parse(localStorage.getItem("cities"));
    cities = cities.sort();
    for (let i=0; i<cities.length; i++){
        // div gets setup to hold btn and and delete
        btnPlusDelete = document.createElement("div");
        btnPlusDelete.className = "btnPlusDelete";
        var citybtn = document.createElement("button");
        //make a button and set up the id, textContent, and className
        var citybtn = document.createElement("button");
        citybtn.setAttribute("id", cities[i]);
        citybtn.textContent = cities[i];
        citybtn.className = "newCity";
        //deletion will be an X to delete the saved city
        var deletion = document.createElement("span");
        deletion.innerHTML = "<i class='fas fa-times status-icon icon-danger'></i>";
        deletion.className = "deletion";
        //append the button and deletion to the div, then append div to page
        btnPlusDelete.appendChild(citybtn);
        btnPlusDelete.appendChild(deletion);
        buttonPlaceholder.appendChild(btnPlusDelete);       
    }

    // getApi is ran when city button is clicked
    $(".newCity").on("click", function(){
        city = this.id;
        getApi(city);
    })

    // div is deleted from local storage each time delete button is clicked
    $(".deletion").on("click", function() {
        const btndelDiv = this.parentNode;
        btndelDiv.parentNode.removeChild(this.parentNode);
        //prevSibling is the button, target it's id for index
        let prevSibling = this.previousElementSibling;
        const index = cities.indexOf(prevSibling.id);
        if (index > -1) {
            cities.splice(index, 1);
        }

         //save new array
        localStorage.setItem("cities", JSON.stringify(cities));
    })
}

// clears old list and removed button placeholder
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function convertTemp(fahrenheit){
    var celsius = ((fahrenheit - 32) * .5556).toFixed();
    return celsius;
}
function convertSpeed(mph){
    var kph = (mph * 1.609344).toFixed();
    return kph;
}
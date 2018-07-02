//KEY WtDgQpcXPTTHmmrANqYHpTyBZmr5gxi2
//http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=WtDgQpcXPTTHmmrANqYHpTyBZmr5gxi2&q=34%2C-112&language=en-us
let currWeather = "cloudy";
const SPEED = 31;
//const TEMP = 5;
const TEMP = data[0]['Temperature']['Imperial']['Value'];
//const TEMP = data[0].Temperature.Imperial.Value;
buildWindChill(SPEED, TEMP);
const direction = "SW";
windDial(direction);
const CONDITION = "cloud";
getCondition(CONDITION);

changeSummeryImage(currWeather);

getCode(LOCALE);

getWeather(locData);

getHourly(locData);

// changeSummeryImage(_newCondition);

//THis function will determine the feels tempreture in html
function buildWindChill(SPEED, TEMP){
    const feelTEMP = document.getElementById('feelTEMP');
    //math to determine how the air will feel
    let wc = 35.74 + 0.6215 * TEMP - 35.75 * Math.pow(SPEED, 0.16) + 0.4275 * TEMP * Math.pow(SPEED, 0.16);

    wc = Math.floor(wc);

    wc = (wc > TEMP)?TEMP:wc;
    console.log(wc); 
    feelTEMP.innerHTML = wc;
}

function windDial(direction){
    const dial = document.getElementById("circle");
    console.log(direction);

//setermines which direction case
    switch (direction){
        case "North":
        case "N":
         dial.setAttribute("class", "n");
         break;
        case "NE":
        case "NNE":
        case "ENE":
         dial.setAttribute("class", "ne");
         break;
        case "NW":
        case "NNW":
        case "WNW":
         dial.setAttribute("class", "nw");
         break;
        case "South":
        case "S":
         dial.setAttribute("class", "s");
         break;
        case "SE":
        case "SSE":
        case "ESE":
         dial.setAttribute("class", "se");
         break;
        case "SW":
        case "SSW":
        case "WSW":
         dial.setAttribute("class", "sw");
         break;
        case "East":
        case "E":
         dial.setAttribute("class", "e");
         break;
        case "West":
        case "W":
         dial.setAttribute("class", "w");
         break;
    }

}

function getCondition(CONDITION, currWeather){
    let cond = CONDITION.toLowerCase();
    
     if(cond == "rainy" || cond == "showers" ){
        currWeather = "rainy";         
        console.log(currWeather);
     }
     if(cond == "cloud" || cond == "gloom"){
        currWeather = "cloudy";
        console.log(currWeather);
     }
     if(cond == "fog" || cond == "mist"){
        currWeather = "foggy";
        console.log(currWeather);
     }
     if( cond == "snow" || cond == "blizz"){
        currWeather = "snowy";
        console.log(currWeather);
     }
     return currWeather;
}

function changeSummeryImage(currWeather){
    const changeImg = document.getElementById("contain-display-box");

    if(currWeather == "rainy"){
        changeImg.setAttribute("class", "rainy");
        console.log("Changed Class to Rainy");
    }
    if(currWeather == "cloudy"){
        changeImg.setAttribute("class", "cloudy");
        console.log("Changed Class to Cloudy");
    }
    if(currWeather == "foggy"){
        changeImg.setAttribute("class", "foggy");
        console.log("Changed Class to foggy");
    }
    if(currWeather == "snowy"){
        changeImg.setAttribute("class", "snowy");
        console.log("Changed Class to snowy");
    }

}

function getGeoLocation(){

}

function getCode(LOCALE) {
  const API_KEY = 'WtDgQpcXPTTHmmrANqYHpTyBZmr5gxi2';
  const URL = 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey='+API_KEY+'&q='+LOCALE;
  fetch(URL)
   .then(response => response.json())
   .then(function (data) {
    console.log('Json object from getCode function:');
    console.log(data);
    const locData = {}; // Create an empty object
    locData['key'] = data.Key; // Add the value to the object
    locData['name'] = data.LocalizedName;
    locData['postal'] = data.PrimaryPostalCode;
    locData['state'] = data.AdministrativeArea.LocalizedName;
    locData['stateAbbr'] = data.AdministrativeArea.ID;
    locData['geoposition'] = LOCALE;
    locData['elevation'] = data.GeoPosition.Elevation.Imperial.Value;
    getWeather(locData);
    })
   .catch(error => console.log('There was a getCode error: ', error))
} 

function getWeather(locData) {
    const API_KEY = 'Your Key Goes Here';
    const CITY_CODE = locData['key']; // We're getting data out of the object
    const URL = "https://dataservice.accuweather.com/currentconditions/v1/"+CITY_CODE+"?apikey="+API_KEY+"&details=true";
    fetch(URL)
     .then(response => response.json())
     .then(function (data) {
      console.log('Json object from getWeather function:');
      console.log(data); // Let's see what we got back
      // Start collecting data and storing it
      locData['currentTemp'] = data[0].Temperature.Imperial.Value;
      locData['summary'] = data[0].WeatherText;
      locData['windSpeed'] = data[0].Wind.Speed.Imperial.Value;
      locData['windUnit'] = data[0].Wind.Speed.Imperial.Unit;
      locData['windDirection'] = data[0].Wind.Direction.Localized;
      locData['windGust'] = data[0].WindGust.Speed.Imperial.Value;
      locData['pastLow'] = data[0].TemperatureSummary.Past12HourRange.Minimum.Imperial.Value;
      locData['pastHigh'] = data[0].TemperatureSummary.Past12HourRange.Maximum.Imperial.Value;
      getHourly(locData); // Send data to getHourly function
      })
     .catch(error => console.log('There was an error: ', error))
  } 


// Get next 12 hours of forecast data from API
function getHourly(locData) {
  const API_KEY = 'Paste Your API Key Here';
  const CITY_CODE = locData['key'];
  const URL = "https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/"+CITY_CODE+"?apikey="+API_KEY;
  fetch(URL)
    .then(response => response.json())
    .then(function (data) {
    console.log('Json object from getHourly function:');
    console.log(data); // See what we got back
    // Get the first hour in the returned data
    let date_obj = new Date(data[0].DateTime);
    let nextHour = date_obj.getHours(); // returns 0 to 23
    // Store into the object
    locData["nextHour"] = nextHour;
    // Counter for the forecast hourly temps
    var i = 1;
    // Get the temps for the next 12 hours
    data.forEach(function (element) {
      let temp = element.Temperature.Value;
      let hour = 'hourTemp' + i;
      locData[hour] = temp; // Store hour and temp to object
      // New hiTemp variable, assign value from previous 12 hours
      let hiTemp = locData.pastHigh;
      // New lowTemp variable, assign value from previous 12 hours
      let lowTemp = locData.pastLow;
      // Check current forecast temp to see if it is 
      // higher or lower than previous hi or low
      if(temp > hiTemp){
        hiTemp = temp;
      } else if (temp < lowTemp){
        lowTemp = temp;
      }
      // Replace stored low hi and low temps if they changed
      if(hiTemp != locData.pastHigh){
        locData["pastHigh"] = hiTemp; // When done, this is today's high temp
      }
      if(lowTemp != locData.pastLow){
        locData["pastLow"] = lowTemp; // When done, this is today's low temp
      }
      i++; // Increase the counter by 1
    }); // ends the foreach method
    console.log('Finished locData object and data:');
    console.log(locData);
    buildPage(locData); // Send data to buildPage function
    })
    .catch(error => console.log('There was an error: ', error))
} // end getHourly function
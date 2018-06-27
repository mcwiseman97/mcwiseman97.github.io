//KEY WtDgQpcXPTTHmmrANqYHpTyBZmr5gxi2

const SPEED = 31;
const TEMP = 5;
buildWindChill(SPEED, TEMP);
const direction = "NNE";
windDial(direction);
const CONDITION = "Rainy";

const _newCondition = getCondition(CONDITION);


changeSummeryImage(_newCondition);

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
    const dial = document.getElementById("circle")
    console.log(direction)
//setermines which direction case
    switch (direction){
        case "North":
        case "N":
         dial.setAttribute("class", "n") //"n" is the CSS rule selector
         break;
        case "NE":
        case "NNE":
        case "ENE":
         dial.setAttribute("class", "ne")
         break;
        case "NW":
        case "NNW":
        case "WNW":
         dial.setAttribute("class", "nw")
         break;
        case "South":
        case "S":
         dial.setAttribute("class", "s")
         break;
        case "SE":
        case "SSE":
        case "ESE":
         dial.setAttribute("class", "se")
         break;
        case "SW":
        case "SSW":
        case "WSW":
         dial.setAttribute("class", "sw")
         break;
        case "East":
        case "E":
         dial.setAttribute("class", "e")
         break;
        case "West":
        case "W":
         dial.setAttribute("class", "w")
         break;
    }
}

function getCondition(CONDITION){
     let cond = CONDITION.toLowerCase();

    cond = "Rainy";
    
     if(cond == "Rainy" || cond == "showers" ){
        return "Rainy";
     }
    //  if(PHRASE.includes("cloud"))||(PHRASE.includes("gloom")){
    //     return "Cloudy";
    //  }
    //  if(PHRASE.includes("fog"))||(PHRASE.includes("mist")){
    //     return "Foggy";
    //  }
    //  if(PHRASE.includes(""))||(PHRASE.includes("")){

    //  }
}

function changeSummeryImage(_newCondition){
    if (_newCondition == "Rainy"){
        document.body.style.backgroundImage = "url('rain.jpg')";
    }

}
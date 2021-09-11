  
//Add Dropdown for Body Parts
var selectBP = document.getElementById("selectBP");
var bodypartArray = [  "back",
"cardio",
"chest",
"lower arms",
"lower legs",
"neck",
"shoulders",
"upper arms",
"upper legs",
"waist"];
for(var i = 0; i < bodypartArray.length; i++) {
    var opt = bodypartArray[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectBP.appendChild(el);
}
//Add Dropdown for Equipment
var selectEquipment = document.getElementById("selectEquipment");
var equipmentArray = [ "assisted",
"band",
"barbell",
"body weight",
"bosu ball",
"cable",
"dumbbell",
"elliptical machine",
"ez barbell",
"hammer",
"kettlebell",
"leverage machine",
"medicine ball",
"olympic barbell",
"resistance band",
"roller",
"rope",
"skierg machine",
"sled machine",
"smith machine",
"stability ball",
"stationary bike",
"stepmill machine",
"tire",
"trap bar",
"upper body ergometer",
"weighted",
"wheel roller"
];
for(var i = 0; i < equipmentArray.length; i++) {
    var opt = equipmentArray[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectEquipment.appendChild(el);
}

//Fetch Data from exercise API
fetch("https://exercisedb.p.rapidapi.com/exercises/equipment/tire", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "exercisedb.p.rapidapi.com",
		"x-rapidapi-key": "4d2c788046mshbc1852c4481b3cbp1672e8jsn8bae1bef772c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
.then(data => {
    console.log(data);
    displayExercise(data);
    
    //Body Part Function to Randomize
    let bpResult = data.filter(part => {
        return part.bodyPart === 
    });   
    //Body Part Function for Data
    function randomBP (){
        var bodypartRandomizer =  bpResult[Math.floor(Math.random()*data.length)]
        var bpDiv = document.getElementById("bpResult");
        var heading = document.createElement("h2");
        heading.innerHTML = bodypartRandomizer.name;
        bpDiv.appendChild(heading)
        var exerciseGif = document.createElement("img");
        exerciseGif.src = bodypartRandomizer.gifUrl;
        bpDiv.appendChild(exerciseGif)
    
    }
    //click button to filter for body part 
    document.getElementById("bodypartBTN").addEventListener("click",randomBP)

    //Equipment Filter
    let equipmentResult = data.filter(equipmentPull => {
        return equipmentPull.equipment === 
    });

    //Equipment Function to Randomize
    function randomEquipment (){
        var equipmentRandomizer =  equipmentResult[Math.floor(Math.random()*data.length)]
        var equipmentDiv = document.getElementById("equipmentResult");
        var heading = document.createElement("h2");
        heading.innerHTML = equipmentRandomizer.name;
        equipmentDiv.appendChild(heading)
        var exerciseGif = document.createElement("img");
        exerciseGif.src = equipmentRandomizer.gifUrl;
        equipmentDiv.appendChild(exerciseGif)
    }
    //Click button to filter for Equipment
    document.getElementById("equipmentBTN").addEventListener("click",randomEquipment)
})

.catch((error) => console.error("FETCH ERROR:", error));

//Function to Display 
function displayExercise(data){
    var exercises =  data[Math.floor(Math.random()*data.length)]
    var exerciseDiv = document.getElementById("exercise");
    var heading = document.createElement("h2");
    heading.innerHTML = exercises.name;
    exerciseDiv.appendChild(heading)
    var exerciseGif = document.createElement("img");
    exerciseGif.src = exercises.gifUrl;
    exerciseDiv.appendChild(exerciseGif)

    return displayExercise
}

//Click Search Button
document.getElementById("searchButton").addEventListener("click",displayExercise)

//Function for Submit button for daily log
function update() {
    document.getElementById('target').value = document.getElementById('source').value;
}

//Weather Section
var apiKey = "dd1155503169dbd265f7df771042e355"
var city = document.getElementById("cityName").value
var searchBTN = document.getElementById("searchBTN")

//fetch current weather for a city
function currentWeather(cityName){
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&units=imperial&appid=' + apiKey)
.then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data)
    drawWeather(data)
  })
  .catch(function() {
    // catch any errors
  });
}

function cityRequest() {
    currentWeather("Detroit");
  }
//function cityRequest() {
 //var city = document.getElementById("cityName").value
   //if (city.length < 1) return;
   //else drawWeather("" + city);
  //}
      
function drawWeather( d ) {
    var iconNumber = d.weather[0].icon
    document.getElementById("conditionIcon").src="http://openweathermap.org/img/wn/" + iconNumber +"@2x.png"
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = d.main.temp;
	document.getElementById('location').innerHTML = d.name;
    document.getElementById('humidity').innerHTML = d.main.humidity + "%";
   document.getElementById('date').innerHTML =d.dt;

}
searchBTN.addEventListener("click",cityRequest)

//JS for CSS Framework
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

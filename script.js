//Add Dropdown for Body Parts
var selectBP = document.getElementById("selectBP");
var bodyparts = [  "back",
"cardio",
"chest",
"lower arms",
"lower legs",
"neck",
"shoulders",
"upper arms",
"upper legs",
"waist"];
for(var i = 0; i < bodyparts.length; i++) {
    var opt = bodyparts[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectBP.appendChild(el);
}
//Add Dropdown for Equipment
var selectEquipment = document.getElementById("selectEquipment");
var equipment = [ "assisted",
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
for(var i = 0; i < equipment.length; i++) {
    var opt = equipment[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectEquipment.appendChild(el);
}

//Fetch Data from exercise API
fetch("https://exercisedb.p.rapidapi.com/exercises", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "exercisedb.p.rapidapi.com",
		"x-rapidapi-key": "4d2c788046mshbc1852c4481b3cbp1672e8jsn8bae1bef772c"
	}
})
.then(response => {
	if (response.ok){
        return response.json();
    }
    else {
        throw new Error("Network Response Error")
    }
})
.then(data => {
    console.log(data);
    console.log (data[0].name)
    displayExercise(data)
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
}

//Click Search Button
document.getElementById("searchButton").addEventListener("click",displayExercise)



//Function for Submit button for daily log
function update() {
    document.getElementById('target').value = document.getElementById('source').value;
}

var journalform = document.getElementById("application")
//Add Dropdown for Body Parts
var selectBP = document.getElementById("selectBP");
var bodypartArray = ["", "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist"];
for (var i = 0; i < bodypartArray.length; i++) {
    var opt = bodypartArray[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectBP.appendChild(el);
}
//Add Dropdown for Equipment
var selectEquipment = document.getElementById("selectEquipment");
var equipmentArray = ["", "assisted",
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
for (var i = 0; i < equipmentArray.length; i++) {
    var opt = equipmentArray[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectEquipment.appendChild(el);
}

//Filter by Bodypart 
//Fetch API Data Using Selected BP
function bodypartFetch(selectedBP) {
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/" + selectedBP + "", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "4d2c788046mshbc1852c4481b3cbp1672e8jsn8bae1bef772c"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Network Response Error")
        }
    })
    .then(part => {
        console.log(part);
        //Body Part Function for Data
        var bodypartRandomizer = part[Math.floor(Math.random() * part.length)]
        function randomBP() {
            var bpDiv = document.getElementById("bpResult");
            var heading = document.createElement("h2");
            heading.innerHTML = bodypartRandomizer.name;
            bpDiv.appendChild(heading)
            var exerciseGif = document.createElement("img");
            exerciseGif.src = bodypartRandomizer.gifUrl;
            bpDiv.appendChild(exerciseGif)
            return randomBP
        }
        randomBP()
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}
//Find body part value
function bodypartValue() {
    var selectedBP = document.getElementById("selectBP").options[document.getElementById("selectBP").selectedIndex].value
    if (selectedBP === "") return;
    else bodypartFetch("" + selectedBP);
}
//Run bp Fetch with Button
document.getElementById("bodypartBTN").addEventListener("click", bodypartValue)

//Filter by Equipment
//Fetch API Data Using Selected Equipment
function equipmentFetch(selectedEquip) {
    fetch("https://exercisedb.p.rapidapi.com/exercises/equipment/" + selectedEquip + "", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "4d2c788046mshbc1852c4481b3cbp1672e8jsn8bae1bef772c"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Network Response Error")
        }
    })
    .then(equipment => {
        console.log(equipment);
        //Equipment Function to Randomize
        var equipmentRandomizer = equipment[Math.floor(Math.random() * equipment.length)]
        function randomEquipment() {
            var equipmentDiv = document.getElementById("equipmentResult");
            var heading = document.createElement("h2");
            heading.innerHTML = equipmentRandomizer.name;
            equipmentDiv.appendChild(heading)
            var exerciseGif = document.createElement("img");
            exerciseGif.src = equipmentRandomizer.gifUrl;
            equipmentDiv.appendChild(exerciseGif)
        }
        randomEquipment()
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}
//Find Equipment Value
function equipmentValue() {
    var selectedEquip = document.getElementById("selectEquipment").options[document.getElementById("selectEquipment").selectedIndex].value
    if (selectedEquip === "") return;
    else equipmentFetch("" + selectedEquip);
}
//Run Equipment Fetch with Button
document.getElementById("equipmentBTN").addEventListener("click", equipmentValue)

//Fetch All Data from exercise API
function fetchAllData() {
    fetch("https://exercisedb.p.rapidapi.com/exercises", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "4d2c788046mshbc1852c4481b3cbp1672e8jsn8bae1bef772c"
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Network Response Error")
        }
    })
    .then(data => {
        console.log(data);
        //Function to Display
        var exercises = data[Math.floor(Math.random() * data.length)]
        function displayExercise() {
            var exerciseDiv = document.getElementById("exercise");
            var heading = document.createElement("h2");
            heading.innerHTML = exercises.name;
            exerciseDiv.appendChild(heading)
            var exerciseGif = document.createElement("img");
            exerciseGif.src = exercises.gifUrl;
            exerciseDiv.appendChild(exerciseGif)

            return displayExercise
        }
        displayExercise()
        //Click Search Button

    })
    .catch((error) => console.error("FETCH ERROR:", error));
}
//Search Button All Exercises
document.getElementById("searchButton").addEventListener("click", fetchAllData)

//clear exercises from div
function clearExercise(){
    var exerciseDiv = document.getElementById("exercise")
    var equipmentDiv = document.getElementById("equipmentResult");
    var bpDiv = document.getElementById("bpResult");
    exerciseDiv.innerHTML = "";
    equipmentDiv.innerHTML = "";
    bpDiv.innerHTML = "";
    return clearExercise
}

//clear button
document.getElementById("clear").addEventListener("click", clearExercise)

//Function for Submit button for daily log
function update() {
    document.getElementById('target').value = document.getElementById('source').value;
}

box1.addEventListener('input', function () {
    localStorage.setItem('box1', box1.value);
}, false);

box2.addEventListener('input', function () {
    localStorage.setItem('box2', box2.value);
}, false);




function onSubmitClick(event) {
    event.preventDefault()
    console.log("testapp");
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    box2.value = box2.value + " " + box1.value;
}

journalform.addEventListener("submit", onSubmitClick)


//Weather Section
var apiKey = "dd1155503169dbd265f7df771042e355"
var city = document.getElementById("cityName").value
var searchBTN = document.getElementById("searchBTN")


//fetch current weather for a city name
function currentWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data)
            drawWeather(data)
        })
        .catch(function () {
            // catch any errors
        });
}
function cityRequest() {
    var city = document.getElementById("cityName").value
    if (city.length < 1) return;
    else currentWeather("" + city);
}
function drawWeather(d) {
    var iconNumber = d.weather[0].icon
    document.getElementById("conditionIcon").src = "http://openweathermap.org/img/wn/" + iconNumber + "@2x.png"
    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = d.main.temp + "°";
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('humidity').innerHTML = d.main.humidity + "%";

}
searchBTN.addEventListener("click", cityRequest)

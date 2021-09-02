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
var journalform= document.getElementById("application")  

//Local Storage
if (window.localStorage) {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');

    box1.value = localStorage.getItem('box1');
    box2.value = localStorage.getItem('box2');

    box1.addEventListener('input', function () {
        localStorage.setItem('box1' , box1.value);
    }, false);

    box2.addEventListener('input', function () {
        localStorage.setItem('box2' , box2.value);
    }, false);
    
    
}

function onSubmitClick(event) {
    event.preventDefault()
    console.log("testapp");
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2'); 
    box2.value= box2.value +" "+ box1.value;
 }

 journalform.addEventListener("submit", onSubmitClick)
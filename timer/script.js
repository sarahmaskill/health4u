
var start= document.getElementById('start')
var reset= document.getElementById('reset')

var hours= document.getElementById('hours')
var minutes= document.getElementById('minutes')
var seconds= document.getElementById ('seconds')

//store a reference to var
var startTimer= " ";


function timer() {
    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
        hours.value =0
        minutes.value =0
        seconds.value =0


    } else if(seconds.value !=0)  {
        seconds.value --;


    } else if (minutes.value !=0 && seconds.value ==0) {
        seconds.value = 59;
        minutes.value --;

    }else if( hours.value !=0 && minutes.value ==0){
        minutes.value =59;
        hours.value --;

    }
        return;
}


function stopTimer() {
    clearInterval(startTimer)
}


start.addEventListener('click', function(){
    //intialize the var startTimer
    function startInterval() {

        startTimer=setInterval(function(){
            timer();
        },1000);
    }
    startInterval()
})


reset.addEventListener('click', function(){
    hours.value =0
    minutes.value =0
    seconds.value =0

    stopTimer()

})
// function time(){
//     console.log("running....")
// }

// setInterval(time,2000)

// setTimeout(time,3000) 

// var count = 0;
// var interval;
// function time(){
//     count++;
//     console.log(count)
// }

// interval = setInterval(time,1000);

// setTimeout(function(){
//     clearInterval(interval)
// }, 8000)

var min = 0;
var sec = 0;
var msec = 0;
var minute = document.getElementById("min");
var second = document.getElementById("sec");
var msecond = document.getElementById("msec");
var interval;

function timer(){
    msec++;
    msecond.innerHTML = msec;
    if(msec >= 100){
        msec = 0;
        sec++;
        second.innerHTML = sec;
    }
    if(sec >= 60){
        sec = 0;
        min++;
        minute.innerHTML = min;
    }

}

function start(){

    interval = setInterval(timer,10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    msec = 0;
    sec = 0;
    min = 0;
    msecond.innerHTML = msec;
    second.innerHTML = sec;
    minute.innerHTML = min;
}
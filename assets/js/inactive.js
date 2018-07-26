var timeoutID;
var time = 1500;

var ScrolTimeout;
var ScrollTimer = 1500;



function startLoad(){
    ScrolTimeout = window.setTimeout(scrollAdd, time);
}

/*---------------------------------------------------------------------*/
/*-------------------------------clear All----------------------------*/
/*---------------------------------------------------------------------*/
function clearAllInactive(){
    window.removeEventListener("DOMMouseScroll", resetTimer, false);
    window.removeEventListener("MSPointerMove", resetTimer, false);
    window.removeEventListener("mousewheel", resetTimer, false);
    window.removeEventListener("mousemove", resetTimer, false);
    window.removeEventListener("mousedown", resetTimer, false);
    window.removeEventListener("touchmove", resetTimer, false);
    window.removeEventListener("keypress", resetTimer, false);
    window.clearTimeout(timeoutID);
    window.clearTimeout(ScrolTimeout);
}

/*---------------------------------------------------------------------*/
/*-------------------------------star timer----------------------------*/
/*---------------------------------------------------------------------*/
function inactiveMode() {
    window.addEventListener("DOMMouseScroll", resetTimer, false);
    window.addEventListener("MSPointerMove", resetTimer, false);
    window.addEventListener("mousewheel", resetTimer, false);
    window.addEventListener("mousemove", resetTimer, false);
    window.addEventListener("mousedown", resetTimer, false);
    window.addEventListener("touchmove", resetTimer, false);
    window.addEventListener("keypress", resetTimer, false);
    startTimer();
}

/*---------------------------------------------------------------------*/
/*-------------------------------star timer----------------------------*/
/*---------------------------------------------------------------------*/
function startTimer() {
    timeoutID = window.setTimeout(goInactive, time);
}
function resetTimer(e) {
    window.clearTimeout(timeoutID);
    window.clearTimeout(ScrolTimeout);
    goActive();
}


/*---------------------------------------------------------------------*/
/*------------------toggle active/innactive----------------------------*/ 
/*---------------------------------------------------------------------*/
function goInactive() {
    scrollAddEachTime();
}

function goActive() {
    //console.log('is active');
    startTimer();
}

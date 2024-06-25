let timeShow = document.querySelector(".watch");
let start = document.querySelector(".btn1");
let stop = document.querySelector(".btn2");
let reset = document.querySelector(".btn3");

let msec = 0;
let sec = 0;
let min = 0;

var timerId;
start.addEventListener("click", function () {
  timerId = setInterval(startTimer, 10);
});
stop.addEventListener("click", function () {
  clearInterval(timerId);
});
reset.addEventListener("click", resetTimer);
function resetTimer() {
  msec = 0;
  sec = 0;
  min = 0;
  clearInterval(timerId);
  timeShow.innerHTML = "00 : 00 : 00";
}

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
  var misecStr = msec < 10 ? "0" + msec : msec;
  var secStr = sec < 10 ? "0" + sec : sec;
  var minStr = min < 10 ? "0" + min : min;
  timeShow.innerHTML = minStr + " : " + secStr + " : " + misecStr;
}

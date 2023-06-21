let miliseconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0,
  flag = "";

let timerRef = document.querySelector(".timer-display");
document.getElementById("start-timer").addEventListener("click", () => {
  if (flag !== "") {
    clearInterval(flag);
  }
  flag = setInterval(displayTimer, 10);
});

//ternary function
function displayTimer() {
  miliseconds += 10;
  seconds = miliseconds == 1000 ? (seconds + 1) % 60 : seconds;
  minutes = seconds == 60 ? (minutes + 1) % 60 : minutes;
  hours = minutes == 60 ? (hours + 1) % 60 : hours;
  miliseconds = miliseconds == 1000 ? 0 : miliseconds;

  let h = hours.toString().padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(miliseconds).padStart(3, "0");
  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(flag);
});
document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(flag);
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerRef.innerHTML = `00 : 00 : 00 : 000`;
});

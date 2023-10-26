const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

// Get specific date and time in milliseconds from 1970 UTC
let countDownDate = new Date("Aug 31, 2024").getTime();

setInterval(() => {
  // Get today's date and time in milliseconds from 1970 UTC
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}, 1000);

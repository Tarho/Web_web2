document.addEventListener("DOMContentLoaded", function () {
  var yearele = document.getElementById("year");
  var untilNewYearEl = document.getElementById("until-new-year");
  var d = new Date();
  var years = d.getFullYear();

  function display() {
    const newYearDate = new Date(years + 1, 0, 1); // January is 0 in JavaScript dates
    const dayOfWeek = getDayOfWeek(newYearDate.getDay());
    yearele.innerHTML = `Countdown to year ${years + 1}`;
    untilNewYearEl.textContent = `Time until ${dayOfWeek}, 1 January ${
      years + 1
    }`;
  }

  setInterval(display, 1000);

  const newyear = `1/1/${years + 1}`;
  const daysEl = document.querySelector(".day");
  const hourEl = document.querySelector(".hour");
  const minutesEl = document.querySelector(".minutes");
  const secEl = document.querySelector(".second");

  function timecountdown() {
    const nowDate = new Date();
    const newyearDate = new Date(newyear);
    const totalsec = (newyearDate - nowDate) / 1000;

    const days = Math.floor(totalsec / 3600 / 24);
    const hours = Math.floor(totalsec / 3600) % 24;
    const minutes = Math.floor(totalsec / 60) % 60;
    const seconds = Math.floor(totalsec) % 60;

    daysEl.textContent = formatTime(days);
    hourEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secEl.textContent = formatTime(seconds);
  }

  function formatTime(time) {
    return time >= 10 ? time : `0${time}`;
  }

  timecountdown();
  setInterval(timecountdown, 1000);

  function getDayOfWeek(dayIndex) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[dayIndex];
  }
});

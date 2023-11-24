function displayTime() {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
}

setInterval(displayTime, 1000);

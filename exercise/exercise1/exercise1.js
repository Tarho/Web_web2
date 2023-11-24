function format(d) {
  var hours = d.getHours();
  const mins = d.getMinutes().toString().padStart(2, "0");
  var mili = d.getSeconds().toString().padStart(2, "0");
  var am_pm = hours >= 12 ? "PM" : "AM";
  var strTime =
    "Current time is : " + hours + " " + am_pm + " : " + mins + " : " + mili;
  return strTime;
}

console.log(format(new Date()));

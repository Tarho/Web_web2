let count = 0;
function increaseOne() {
  document.getElementById("result").innerHTML = ++count;
}
function resetCount() {
  count = 0;
  document.getElementById("result").innerHTML = count;
}

var user = document.getElementById("user");
var password = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
var login = document.getElementById("login");
var hello = document.getElementById("hello");

eyeIcon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eye.style.display = "block";
    eyeSlash.style.display = "none";
  } else {
    password.type = "password";
    eye.style.display = "none";
    eyeSlash.style.display = "block";
  }
};

function validateInput() {
  var username = user.value;
  var passwordValue = password.value;

  var specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
  var spaceRegex = /\s/;

  if (
    username !== username.replace(spaceRegex, "") ||
    specialCharsRegex.test(username)
  ) {
    alert("Invalid Name or Password.");
    return;
  }

  if (
    passwordValue !== passwordValue.replace(spaceRegex, "") ||
    specialCharsRegex.test(passwordValue) ||
    !passwordValue.includes("@")
  ) {
    alert("Invalid Name or Password.");
    return;
  }

  loginClick();
}

function loginClick() {
  var name = document.querySelector("#user-name");
  login.style.display = "none";
  hello.style.display = "block";

  if (user.value !== "") {
    name.innerHTML = user.value;
  } else {
    name.innerHTML = "Tên Đăng Nhập Rỗng";
  }
}

function logoutClick() {
  login.style.display = "block";
  hello.style.display = "none";
}

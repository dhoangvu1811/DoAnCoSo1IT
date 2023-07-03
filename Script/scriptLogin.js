const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

function signup(e) {
  event.preventDefault();
  var username = document.getElementById("usernamere").value;
  var email = document.getElementById("emailre").value;
  var password = document.getElementById("passwordre").value;
  var user = {
    username: username,
    email: email,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(email, json);
  alert("đăng ký thành công");
}
function login(e) {
  event.preventDefault();
  var email = document.getElementById("emaillg").value;
  var password = document.getElementById("passwordlg").value;
  var user = localStorage.getItem(email);
  if (user) {
    var data = JSON.parse(user);
    if (email == data.email && password == data.password) {
      alert("Đăng nhập thành công");
      window.location.href = "./../index.html";
    } else {
      alert("Đăng nhập thất bại!");
    }
  } else {
    alert("Tài khoản không tồn tại!");
  }
}

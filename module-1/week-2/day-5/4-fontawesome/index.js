const heart = document.getElementById("heart-icon");
const user = document.getElementById("user-icon");

heart.onclick = function () {
  heart.classList.toggle("is-beating");
};


user.onclick = function () {
  user.classList.replace("fa-user", "fa-users");
};

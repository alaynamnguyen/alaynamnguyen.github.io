function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleMode() {
  var body = document.body;
  var modeSwitch = document.getElementById("modeSwitch");
  var icons = document.querySelectorAll(".icon");

  if (modeSwitch.checked) {
    body.classList.add("dark-mode");
    icons.forEach(function (icon) {
      var src = icon.getAttribute("src");
      var newSrc = src.replace(".png", "-dm.png");
      icon.setAttribute("src", newSrc);
    });
  } else {
    body.classList.remove("dark-mode");
    icons.forEach(function (icon) {
      var src = icon.getAttribute("src");
      var newSrc = src.replace("-dm.png", ".png");
      icon.setAttribute("src", newSrc);
    });
  }
}

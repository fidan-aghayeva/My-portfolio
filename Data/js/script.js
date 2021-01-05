// scroll

$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 50) {
    $("header").css("background", "#fff");
    $("header").css("box-shadow", "0 0 15px 0 #B2AFAF");
  } else {
    $("header").css("background", "transparent");
    $("header").css("box-shadow", "none");
  }
});

// bars

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

// hamburgermenu
function myFunction(element) {
  var x = document.getElementById("hamburgermenu");
  x.classList.toggle("active");
  if ($("#hamburgermenu").css("display") == "flex") {
    $("html").css("overflow", "hidden");
  } else {
    $("html").css("overflow", "auto");
  }
}

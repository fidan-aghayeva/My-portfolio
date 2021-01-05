//dropdowns

//language button
$(".langMenu").click(function () {
  $(".subLangMenu").toggleClass("toggleLang");
});

//accordion

var acc = document.getElementsByClassName("accordion");
var changeIcon = document.getElementsByClassName("changeIcon");
var i;
var arrowIcon = document.querySelectorAll(".icon-1");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    panel.style.marginBottom = "30px";
    if (panel.style.display === "block") {
      panel.style.display = "none";
      arrowIcon.classList.remove = "upArrow";
    } else {
      panel.style.display = "block";
      arrowIcon.classList.add = "upArrow";
    }
  });
}
//accordion icon
$(function () {
  $(".accordion").click(function () {
      $(this).find('.rotate').toggleClass("down");
  })
});

//menu arrow icons

$(function () {
  $(".main-menu label").click(function () {
      $(this).find('.rotate').toggleClass("down");
  })
});

//fancyBox

$('.videoExample a').fancybox({
  caption: function (instance, item) {
    return $(this).parent().find('.videoText').html();
  }
});

//pagination

(function($) {
  $(document).ready(function() {
      alert("hello");
  });
}(jquery));

//menu icon
function myFunction(x) {
  x.classList.toggle("change");
}
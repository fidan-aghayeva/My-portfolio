//slider
var slider = document.getElementsByClassName("slide");
var slideCount = slider.length;
index = 0;

slideShow(index);

function prev() {
  index--;
  slideShow(index);
}

function next() {
  index++;
  slideShow(index);
}

function slideShow(slideNo) {
  index = slideNo;
  if (slideNo >= slideCount) {
    index = 0;
  }
  if (slideNo < 0) {
    index = slideCount - 1;
  }

  for (i = 0; i < slideCount; i++) {
    slider[i].style.display = "none";
  }
  slider[index].style.display = "block";
}

//dropdowns

//language button
$(".langMenu").click(function () {
  $(".subLangMenu").toggleClass("toggleLang");
});

//menu bar

function myFunction(x) {
  x.classList.toggle("change");
}

//FancyBox

$('.fancyBox').fancybox({
  caption: function (instance, item) {
    return $(this).parent().find('.videoText').html();
  }
});

//menu arrow icons

$(function () {
  $(".main-menu label").click(function () {
      $(this).find('.rotate').toggleClass("down");
  })
});

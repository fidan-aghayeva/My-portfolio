//karusel
var Index = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  Index++;
  if (Index > x.length) {Index = 1}    
  x[Index-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}
//hamburgermenu
function myFunction(element) {
    var x = document.getElementById("hamburgerul");
    x.classList.toggle("active");
  }
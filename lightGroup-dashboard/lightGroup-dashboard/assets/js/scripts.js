// Our own scripts

// function dropSorgu() {
//     var allCreate = document.getElementsByClassName("allCreate");
//     allCreate.classList.toggle("activeMenu");
// }

// Generate a password string

// function shuffleArray(array) {
//   var myArray = [];
//   var m = array.length, t, i;

// while (m) {

//   i = Math.floor(Math.random() * m--);

//   t = array[m];
//   array[m] = array[i];
//   array[i] = t;

//   console.log(array[i]);
//   }

//   return array;
// }
var allDisables = document.querySelectorAll("#reviewDisable");
for(var i = 0; i <allDisables.length; i++){
  allDisables[i].disabled =true
}

function randString(id) {
  var dataSet = $(id).attr("data-character-set").split(",");

  var possible = "";
  var capitalLetters = "";
  var smallLetters = "";
  var numbers = "";
  var characters = "";

  if ($.inArray("a-z", dataSet) >= 0) {
    smallLetters += "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 2; i++) {
      possible += smallLetters.charAt(
        Math.floor(Math.random() * smallLetters.length)
      );
    }
  }
  if ($.inArray("A-Z", dataSet) >= 0) {
    capitalLetters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 2; i++) {
      possible += capitalLetters.charAt(
        Math.floor(Math.random() * capitalLetters.length)
      );
    }
  }
  if ($.inArray("0-9", dataSet) >= 0) {
    numbers += "0123456789";
    for (var i = 0; i < 2; i++) {
      possible += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
  }
  if ($.inArray("#", dataSet) >= 0) {
    characters += "![]{}()%&*$#^<>~@|";
    for (var i = 0; i < 2; i++) {
      possible += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
  }


  return possible;
}

$(document).ready(function () {
  $("select")
    .change(function () {
      $(this)
        .find("option:selected")
        .each(function () {
          var optionValue = $(this).attr("value");
          if (optionValue) {
            $(".box")
              .not("." + optionValue)
              .hide();
            $("." + optionValue).show();
          } else {
            $(".box").hide();
          }
        });
    })
    .change();
});


function notShowBtns(){
  //This data i get from DB
 //now i need to select option in select.
 console.log($('#chooseSelect').val());
 if($('#chooseSelect').val() === "open" || $('#chooseSelect').val() === "email" || $('#chooseSelect').val() === "date"){
   var addVrntBtn = document.getElementById("addVrnt");
   var addOtherBtn = document.getElementById("other")
   addVrntBtn.style.display = "none";
   addOtherBtn.style.display = "none";

 }
 else{
  var addVrntBtn = document.getElementById("addVrnt");
  var addOtherBtn = document.getElementById("other")
  addVrntBtn.style.display = "inline";
  addOtherBtn.style.display = "inline";
 }
}

// Create a new password
$(".input-group-append").click(function () {
  var field = $(this).closest("div").find('input[rel="gp"]');
  field.val(randString(field));
});

// Auto Select Pass On Focus
$('input[rel="gp"]').on("click", function () {
  $(this).select();
});

$(".edit-button").click(function () {
  $("#edit-modal").modal("show");
});

$(".cancel-button").click(function () {
  $(this).modal("hide");
});

$(".save-delete-button").click(function () {
  alert("Dəyişikliklər qeyd olundu");
});



$(".delete-button").click(function () {
  $("#delete-modal").modal("show");
});

$(".remove-button").click(function () {
  $("#remove-modal").modal("show");
});

$(".reset-button").click(function () {
  $("#reset-modal").modal("show");
});

$(".add-button").click(function () {
  location.href = "newUser.html";
});

$("#sidebarCollapse").on("click", function () {
  if (screen.width >= 769) {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("mobileContent");
  } 
});

$(".mobileMenuIcon").on("click", function () {
    $("#sidebar").toggleClass("mobileMenu");
    if($("#sidebar").css("display")=="flex")
    {
        $("html").css("overflow","hidden");
    }
    else {
        $("html").css("overflow","auto");
    }
});

$(".users-nav").on("click", function () {
  $(this).next("ul").toggleClass("dropdown");
});

$(".surveys").on("click", function () {
  $(this).next("ul").toggleClass("dropdown");
});

$(".save").click(function () {
  if (
    $("#username").val() != "" &&
    $("#firstname").val() != "" &&
    $("#lastname").val() != "" &&
    $("#phone").val() != "" &&
    $("#email").val() != "" &&
    $("#newpassword").val() != "" &&
    $("#newpassword").val() != "" &&
    $("#newpassword2").val() != ""
  ) {
    alert("Dəyişikliklər qeyd olundu");
  }
});

$(".create-button").click(function () {
  if (
    $("#username").val() != "" &&
    $("#firstname").val() != "" &&
    $("#lastname").val() != "" &&
    $("#phone").val() != "" &&
    $("#email").val() != "" &&
    $("#password").val() != ""
  ) {
    alert("Yeni istifadəçi əlavə olundu");
  }
});

$(".save-changes-button").click(function () {
  if (
    $("#username").val() != "" &&
    $("#firstname").val() != "" &&
    $("#lastname").val() != "" &&
    $("#phone").val() != "" &&
    $("#email").val() != "" &&
    $("#password").val() != ""
  ) {
    alert("Dəyişikliklər  əlavə olundu");
  }
});

// profile save info

$(document).ready(function () {
  $("#profileForm").submit(function () {
    alert("Məlumatlar uğurla yadda saxlanıldı");
  });
});


//tesdiqle
function confirmForm() {
  alert("Form uğurla təsdiqləndi");
}

//diger buttonu

function addOther(element){
  var otherVrnt = $(element.parentNode).prev()
  if($(otherVrnt).attr("id")=="addOther"){
    if($(otherVrnt).children().length == 0 ){
      var newLabel = document.createElement("label");
      var newInput = document.createElement("input");
      newLabel.className = "newLabelClass";
      newLabel.id = "otherid";
      newInput.className = "addOtherClass";
      newInput.id = "otherTextid"
      newInput.type = "text";
      newLabel.appendChild(document.createTextNode("Digər"));
      newLabel.appendChild(newInput);
      otherVrnt[0].appendChild(newLabel);
    }
  }
}

//variant elave et buttonu

function addSelect() {
  var activeType = document.getElementsByClassName("box");
  let other = document.getElementsByClassName("digertype");
  for (let o = 0; o < other.length; o++) {
    try {
      other[o].parentElement.remove();
    } catch (error) {
      console.log(error);
    }
  }

  for (let i = 0; i < activeType.length; i++) {
    if (activeType[i].style.display == "block") {
      let newLabel = document.createElement("label");
      newLabel.id = "newAddedLabel"
      let elemType = document.createElement("input");
      let elemText = document.createElement("input");
      let br = document.createElement("br");
      br.id = "newAddedBr"
      elemType.setAttribute(
        "type",
        activeType[i].childNodes[1].childNodes[0].type
      );
      elemType.id = "newVariantType"
      elemText.setAttribute("type", "text");
      elemText.className = "text";
      elemText.id = "newVariantText"
      elemText.placeholder = "Birinci cavab";
      activeType[i].appendChild(newLabel);
      newLabel.appendChild(elemType);
      newLabel.appendChild(elemText);
      newLabel.parentNode.append(br);
    }
  }
}


//***************************************sual elave et***********************************

function addQuestion() {
  /***************Dropdown added questions*********** */
  var btnGroup = document.createElement("div");
  btnGroup.classList = "btn-group  col-1 offset-10 "
  btnGroup.id = "templateDropdown"
  var drpdwnBtn = document.createElement("button");
  drpdwnBtn.setAttribute("type","button");
  drpdwnBtn.id = "kebab";
  drpdwnBtn.classList = "btn btn-secondary dropdown-toggle";
  drpdwnBtn.setAttribute("data-toggle","dropdown");
  drpdwnIcon = document.createElement("i");
  drpdwnIcon.classList = "fa fa-ellipsis-v "
  drpdwnBtn.appendChild(drpdwnIcon)


  var drpdwnDiv = document.createElement("div");
  drpdwnDiv.classList ="dropdown-menu"

/****************dropdown add variant******* */
  var drpdwnAddVrnt = document.createElement("a");
  drpdwnAddVrnt.classList = "dropdown-item";
  drpdwnAddVrnt.setAttribute("href","javascript:void(0)");
  drpdwnAddVrnt.setAttribute("onclick", "addVariantToPrev(this)");
  var drpdwnAddVrntText = document.createTextNode("Variant əlavə et")
  drpdwnAddVrnt.appendChild(drpdwnAddVrntText)

/**************dorpdown add other variant******* */
  var drpdwnAddOther = document.createElement("a");
  drpdwnAddOther.classList = "dropdown-item";
  drpdwnAddOther.setAttribute("href","javascript:void(0)");
  drpdwnAddOther.setAttribute("onclick", "addOtherVrnt(this)");
  var drpdwnAddOtherText = document.createTextNode("\"Digər\" variantı əlavə et")
  drpdwnAddOther.appendChild(drpdwnAddOtherText)

    /***************************dropdown delete last variant ******/
  var drpdwnDltVrnt = document.createElement("a");
  drpdwnDltVrnt.classList = "delete-button dropdown-item";
  drpdwnDltVrnt.setAttribute("href","javascript:void(0)");
  drpdwnDltVrnt.setAttribute("onclick", "deleteLastVrnt(this)");
  var drpdwnDltVrntText = document.createTextNode("Son variantı sil")
  drpdwnDltVrnt.appendChild(drpdwnDltVrntText)

  /**********************dropdown delete other variant****************** */
  var drpdwnDltOther = document.createElement("a");
  drpdwnDltOther.classList = "delete-button dropdown-item";
  drpdwnDltOther.setAttribute("href","javascript:void(0)");
  drpdwnDltOther.setAttribute("onclick", "deleteOtherVrnt(this)");
  var drpdwnDltOtherText = document.createTextNode("\"Digər\" variantını sil")
  drpdwnDltOther.appendChild(drpdwnDltOtherText)

  /**************************dropdown delete question******* */
  var drpdwnDltQstn = document.createElement("a");
  drpdwnDltQstn.classList = "delete-button dropdown-item";
  drpdwnDltQstn.setAttribute("href","javascript:void(0)");
  drpdwnDltQstn.setAttribute("onclick", "deleteQstn(this)");
  var drpdwnDltQstnText = document.createTextNode("Sil")
  drpdwnDltQstn.appendChild(drpdwnDltQstnText)

  /*************************append dropdown************* */
  if($('#chooseSelect').val() === "open" || $('#chooseSelect').val() === "email" || $('#chooseSelect').val() === "date"){
    drpdwnDiv.appendChild(drpdwnDltQstn)
  }
  else{
   
      drpdwnDiv.appendChild(drpdwnAddVrnt);
      drpdwnDiv.appendChild(drpdwnAddOther);
      drpdwnDiv.appendChild(drpdwnDltVrnt);
      drpdwnDiv.appendChild(drpdwnDltOther)
      drpdwnDiv.appendChild(drpdwnDltQstn)
    
  }
  

  btnGroup.appendChild(drpdwnBtn)
  btnGroup.appendChild(drpdwnDiv)

/**************************clone questions and answers************ */
  var activeType = document.getElementsByClassName("box");
  var formAdd = document.getElementById("addQstn");
  var question = document.getElementById("question-input").cloneNode(true);
 
  question.removeAttribute("id");
  question.setAttribute("id", "deleteQstn");
  question.setAttribute("class", "question")
  question.style.marginTop = "15px"

  console.log(question.value); 
  var answers = null;
  for (let i = 0; i < activeType.length; i++) {
    if (activeType[i].style.display == "block") {
      try {
        answers = activeType[i].cloneNode(true);
        answers.classList.remove("box");
        answers.setAttribute("id","deleteAnsw")
      } catch (error) {
        console.log(error);
      }
    }
  }

  var other = document.getElementById("otherid");
  if($(other).length !== 0){
    var otherType = document.getElementById("otherid").cloneNode(true);
    otherType.removeAttribute("id");
    otherType.id = "newOtherId"
  }
  else{
   
  }
  linebreak = document.createElement("br");

  formAdd.appendChild(question);
  formAdd.appendChild(btnGroup)
  console.log(btnGroup)
  formAdd.appendChild(answers);
  if($(other).length !== 0){
      formAdd.appendChild(otherType)
  }
  formAdd.appendChild(linebreak)

  /********************************Delete after adding************ */

  document.getElementById("question-input").value = "";
  
    var variants = document.getElementById("question-section").querySelectorAll(".templateAnsw");
  for(i = 0; i < variants.length; i++) {
    variants[i].value = ""
  }

  var newAddedVariant = document.getElementById("question-section").querySelectorAll("#newAddedLabel");
  for(i = 0; i < newAddedVariant.length; i++) {
    newAddedVariant[i].remove()
  }
  
  var newAddedBreak = document.getElementById("question-section").querySelectorAll("#newAddedBr");
  for(i = 0; i < newAddedBreak.length; i++) {
    newAddedBreak[i].remove()
  }

 document.getElementById("question-section").querySelector("#addOther").innerHTML = "";
  document.getElementById("question-section").querySelector("#templateEmail").value = "";

 
  
  lstQuestions();
}

/******************************************************************************** */


//select all checkboxes
$("#select-all").change(function(){  
	var status = this.checked; 
  $(':checkbox').each(function(){ 
		this.checked = status; 
	});
});

$(':checkbox').change(function(){ 
	if(this.checked == false){ 
		$("#select-all")[0].checked = false; 
	}
	
	//check "select all" if all checkbox items are checked
  if ($(':checkbox:checked').length == $(':checkbox').length-1) { 
		$("#select-all")[0].checked = true; 
	}
});

//******************************COUNTER********************** */

function lstQuestions(){
  var questions = document.getElementsByClassName('question');
  console.log(questions.length)
  document.querySelectorAll('.questionCount').forEach(e => e.remove());
  for(i=1; i<=questions.length; i++){
    countDiv = document.createElement('div');
    countDiv.style.display = "inline-block";
    countDiv.classList = "questionCount"
    countDiv.style.marginRight = "10px";
    countDiv.innerHTML = i + ")";
    $(countDiv).insertBefore(questions[i-1]);
  }

}

/************************Add variant to previous questions************* */
function addVariantToPrev(element){

    var lastVrnt = $(element.parentNode.parentNode).nextUntil( "div.questionCount" ).find('label.variant:last');
    var breakAfterVrnt = document.createElement("br");
    var newLastVrnt = lastVrnt[0].cloneNode(true);
    $(newLastVrnt).insertAfter(lastVrnt);
    $(breakAfterVrnt).insertBefore(newLastVrnt);
}


/*****************************Delete last variant from previous questions */
function deleteLastVrnt(element){
  console.log(element.parentNode.parentNode)
  var lastVrnt = $(element.parentNode.parentNode).nextUntil( "div.questionCount" ).find('label.variant:last');
  lastVrnt.remove()
}

/************************Delete added questions*********** */
function deleteQstn(element){
var dropdown = element.parentNode.parentNode;
console.log(dropdown)
var qstnInput = $(dropdown).prev();
var answers = $(dropdown).next();
var breakkk = $(dropdown).next().next()
qstnInput.remove();
$(dropdown).remove();
answers.remove()
breakkk.remove()
lstQuestions()
}

/************************************dropdown delete other variant function************ */
function deleteOtherVrnt(element){
  var newOtherId = $(element.parentNode.parentNode).nextUntil("div.questionCount" ).next();
  console.log(newOtherId[0])
  if($(newOtherId).attr('id') == "newOtherId"){
    newOtherId[0].remove()
  }
}

/************************************dropdown add other variant function************ */
function addOtherVrnt(element){

    console.log(element.parentNode.parentNode)
    var otherExist = ($(element.parentNode.parentNode).next().next())[0];
    console.log(otherExist)
    if($(otherExist).attr('id') !=="newOtherId"){
      var newLabel = document.createElement("label");
      var newInput = document.createElement("input");
      newLabel.className = "newLabelClass";
      newLabel.id = "newOtherId"
      newInput.className = "addOtherClass";
      newInput.id = "otherTextid"
      newInput.type = "text";
      newLabel.appendChild(document.createTextNode("Digər"));
      newLabel.appendChild(newInput);
      $(newLabel).insertBefore(otherExist)

    }      
    }
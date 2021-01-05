const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

 eventListeners();

function eventListeners() {  //butun event hadiseleri ucun umumi function
  form.addEventListener("submit",addTodo);
  document.addEventListener("DOMContentLoaded",loadAllTodosToUI); // sehife yeniden yuklendikde yazilmis todo lari local storoge den alib sehifeye elave edirik
  secondCardBody.addEventListener("click",deleteTodo); // x e basanda todo lari silmek ucun, burada event capturing den istifade edirik,yeni her bir x ucun ayri ayri event yazmiriq
  filter.addEventListener("keyup",filterTodos); // todolari filtirleyirik
  clearButton.addEventListener("mouseover",clearAllTodos);
}
function clearAllTodos(e)
{
  console.log(e.target)
  if(confirm("silmek istediyinize eminsiniz?"))
  {
    todoList.innerHTML = "";// bu yvas usuldur

    while(todoList.firstElementChild !=null)
    {
      todoList.removeChild(todoList.firstElementChild); //eger birinci elementi null deyilse silir
    }
  }
}
function filterTodos(e)
{
 // console.log(e.target);
  const filterValue = e.target.value.toLowerCase(); // herf hessasligi olmasin deye hamisini kicik herfle yaziriq
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function(listItem)
  {
    const text = listItem.textContent.toLowerCase(); // butun li lerin contentini aliriq
    
    if(text.indexOf(filterValue) === -1) //bununla inputa yazdigimizin hansisa li nin icinde olub olmadigini yoxlayiriq,eger indeksi -1dise hemin li ni display none edirik
    {
      //tapilmadi
      listItem.setAttribute("style","display: none !important"); //css kodu elave edirik
    }
    else {
      listItem.setAttribute("style","display: block");
    }
  });
}
function deleteTodo(e)
{
  // console.log(e.target); // secondCardBody de hara basdigimizi gosterir

  if(e.target.className = "fa fa-remove") // basdigimiz yerin x olub olmadigini yoxlayiriq
  {
    e.target.parentElement.parentElement.remove(); // x in parent elementi a,a nin ise parent elementi li dir ve biz li ni silmeliyik
    deleteTodoFromStoroge(e.target.parentElement.parentElement.textContent); // li nin textcontent ne esasen onu storoge den silirik
    showAlert("success","Successfully deleted");
  }
}
function deleteTodoFromStoroge(deleteTodo)
{
  let todos = getTodosFromStorage();
  todos.forEach(function(todo,index) // forEach bize index i de verir ve index e gore silirik
  {
    if(todo === deleteTodo)
    {
      todos.splice(index,1);
    }
  });
  localStorage.setItem("todos",JSON.stringify(todos)); // sildikden sonra storoge i yeniliyirik
}
function loadAllTodosToUI()
{
  let todos = getTodosFromStorage();
  todos.forEach(function(todo){
    addTodoToUI(todo); // sotoroge de olan butun todo lari UI a elave edirik
  });
}
function addTodo(e){
    const newTodo = todoInput.value.trim(); // trim() funksiyasi eger todo da bosluqlar olarsa onlari goturmemesi ucundur
    
    if(newTodo === "") // eger inputa hecne elave edilmeyibse onda yeni li yaratmasin
    {
      /*<div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                      </div>
                    <hr> */
      showAlert("danger","Please add a ToDo");
    }
    else {
      addTodoToUI(newTodo); // sehifede yazilan todo lari liste elave edecek dinamik olaraq
      addTodoToStorage(newTodo); // todo lari local storage e elave edirik
      showAlert("success","Successfully added");
    }
    

    e.preventDefault();
}
 function showAlert(type,message)
 {
   const alert = document.createElement("div");
   alert.className = `alert alert-${type}`;
   alert.role = "alert";
   alert.textContent = message;
   firstCardBody.appendChild(alert);

   //setTimeOut  alert qutusunun yalniz 1 saniye qalmasini isteyirikse onda bu funksiyadan istifade edirik

   setTimeout(function(){
      alert.remove();   //1000 ms yeni 1saniye sonra alert silinir
   },1000);
 }
 function getTodosFromStorage() // basqa yerlerde de istifade edecik deye ayri bir funksiya seklinde yazirig.butun todo lari goturur
 {
  let todos;
  if(localStorage.getItem("todos") === null)
  {
    todos = [];
  }
  else{
    todos = JSON.parse(localStorage.getItem("todos")); // json.parse string seklinde olan deyeri array a cevirmek ucundur,cunki localstoroge e butun deyerler string seklinde yazilir
  }
  return todos;
 }
 function addTodoToStorage(newTodo) {
      let todos = getTodosFromStorage(newTodo);  // todo lari aliriq
      todos.push(newTodo); // hemin todo lara yeni todo nu elave edirik
      localStorage.setItem("todos",JSON.stringify(todos)); // todos u storoge e elave edirik, json.stringify funksiyasi arrayi stringe cevirir

 }
 function addTodoToUI(newTodo){   // aldigi string deyerini list item olaraq elave edir

    const listItem = document.createElement("li"); //todo lari yazmaq ucun li yaradiriq
    const link = document.createElement("a"); // li icinde a etiketi de var
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));  // yazilan todo nu li nin icine elave edirik
    listItem.appendChild(link); // a ni li nin icine elave edirik
   
   
    // indi ise yaratdigimiz li ni ul nin icine elave edirik

     todoList.appendChild(listItem);

     todoInput.value = "";
   

 }
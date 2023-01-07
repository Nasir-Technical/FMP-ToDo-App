var main = document.getElementById("main");
var input = document.getElementById("input");


function add(){
    var li = document.createElement('li');
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    var editBtn = document.createElement("Button");
    var editBtnText = document.createTextNode("EDIT TODO");
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick","editTodo(this)");
    li.appendChild(editBtn);
    main.appendChild(li);
    input.value = "";
}

function editTodo(element){
    var newvalue = prompt("Enter updated value");
    console.log(element.parentNode.firstChild.nodeValue);
    element.parentNode.firstChild.nodeValue = newvalue
}
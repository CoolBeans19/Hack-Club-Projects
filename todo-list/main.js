var firebaseRootUrl="https://alexis-todo.firebaseio.com/"
var fireBaseRoot=new Firebase(firebaseRootUrl);

window.onload = function(){
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");
  // finds element with id "new-task-button"
  
  function addNewTask(taskName){
    
    var li = document.createElement("li");
    todoList.appendChild(li);
    
    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");
    li.appendChild(input);
    
    var span=document.createElement("span");
    span.innerHTML=taskName;
    li.appendChild(span);
    
    var img = document.createElement("img");
    img.src="http://i.imgur.com/BtLxCD6.png";
    img.setAttribute("class", "delete");
    li.appendChild(img);
    
  }
  
  newTaskButton.onclick=function(){

    var taskName = prompt("Add a task:")
    if (taskName !== null && taskName !==""){
      addNewTask(taskName);
      var task ={}
      task.name=taskName;
      task.done=false;
      fireBaseRoot.push(task);
    }
  };
  fireBaseRoot.on('child_added', function (snapshot){
    var task = snapshot.val();
    addNewTask(task.name, task.isDone);
  });
};
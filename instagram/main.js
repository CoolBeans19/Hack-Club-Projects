//main.js

window.onload=function(){

  var button = document.getElementById('button');
  //finds button
  var takePhoto = function(){
    //asks user for input
    
    var photoUrl = prompt("Enter an image URL");
    
    var img = document.createElement("img");
    img.src=photoUrl;
    //creates image element, sets the source
    
    var parent=document.getElementById("header");
    parent.appendChild(img);
    //adds image element as an element inside the header
    
  };
  
  button.onclick = takePhoto;

};
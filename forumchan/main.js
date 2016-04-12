window.onload = function(){
  
  var button = document.getElementById('button');

  function notifyUser(){
    // take what they put in the box
    // display the text to the user
    //debugger
    var finalPost = document.getElementById('userPost').value;
    $('#text').append(finalPost);
  }
  
  button.onclick=notifyUser;
  
  var imageButton = document.getElementById('imageButton');
  var takePhoto = function(){
    var photoUrl = prompt("Enter an image URL");
    var img = document.createElement("img");
    img.src=photoUrl;
    var parent=document.getElementById("header");
    parent.appendChild(img);
    
  }
  
  imageButton.onclick=takePhoto;
};
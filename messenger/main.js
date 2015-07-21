debugger

var usernameInput = document.getElementById("usernameInput");
var messageInput = document.getElementById("messageInput");
var messageList = document.getElementById("messageList");
var submitButton = document.getElementById("submitButton");

var writeMessage = function(name, message) {
  var messageElement = document.createElement("li");
  messageElement.innerHTML = name + ": " + message;
  messageList.appendChild(messageElement);
}

var addChat = function() {
  debugger
  var username = usernameInput.value;
  if (username === "") {
    username = "anonymous"
  }
  var message = messageInput.value;

  writeMessage(username, message);
}

submitButton.onclick = addChat;
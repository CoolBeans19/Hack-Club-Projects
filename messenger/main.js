
var messagesRef = new Firebase("https://camp-messenger.firebaseio.com/");

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
  var username = usernameInput.value;
  if (username === "") {
    username = "anonymous"
  }
  var message = messageInput.value;

  var data = {};
  data.name = username;
  data.message = message;

  messagesRef.push(data);
  messageInput.value = "";
}

messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  writeMessage(data.name, data.message);
});

submitButton.onclick = addChat;
var config = {
    apiKey: "AIzaSyDmotL75h9IaQcEC9dgCKIYOJjU5FxlrIk",
    authDomain: "collaborative-sketch-3635c.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-3635c.firebaseio.com",
    storageBucket: "collaborative-sketch-3635c.appspot.com",
}
firebase.initializeApp(config);

var pointsData = firebase.database().ref();

var points = [];

function setup() {
  var canvas = createCanvas(400,400);
  background(255);
  fill(0);
  
  pointsData.on("child_added", function (point) {
    points.push(point.val());
  });
  
  canvas.mousePressed(drawPoint); 
  canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
  background(255);
  
  for(var i = 0; i < points.length; i++) {
    var point = points[i];
    ellipse(point.x, point.y, 5, 5);
  }
}

function drawPoint() {
  pointsData.push({x: mouseX, y: mouseY});
}

function drawPointIfMousePressed() {
  if(mouseIsPressed){
    drawPoint();
  }
}

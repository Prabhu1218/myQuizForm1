var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

var Quiz;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}

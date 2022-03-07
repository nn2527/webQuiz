var interval = null;
var sound = new Audio();
sound.src = "30sec.mp3";

function question() {
  document.getElementById("quiz").style.visibility = "visible";
  document.getElementById("time").style.visibility = "visible";
  document.getElementById("start").style.visibility = "hidden";
  timer();
}
function timer() {
  var c = 30;
  interval = setInterval(function () {
    document.getElementById("time").innerHTML = c;
    c--;
    if (c < 0) {
      clearInterval(interval);
      document.getElementById("time").innerHTML = 0;

      check();
    }
  }, 1000);
}
function check() {
  document.getElementById("quiz").style.visibility = "hidden";
  document.getElementById("time").style.visibility = "hidden";
  var correct = 0;
  var q1 = document.quiz.txt.value;
  var q2 = document.quiz.qn1.value;
  var q3 = document.quiz.qn2.value;
  var q4 = document.quiz.qn3.value;
  var q5 = document.quiz.txt1.value;
  if (q1 == "Hypertext Markup Language") {
    correct++;
  }
  if (q2 == "d") {
    correct++;
  }
  if (q3 == "3") {
    correct++;
  }
  if (q4 == "1") {
    correct++;
  }
  if (q5 == "camelCase") {
    correct++;
  }
  var message = [
    "Hurray! All correct! ",
    "Wohoo! Almost all correct:) ",
    "Good performance!",
    "Oops! Better luck next time!",
    "Ouch! You gotta practice more!"
  ];
  var pic = [
    "https://media1.giphy.com/media/dAcQAuZJLfgqL2u1aS/giphy.gif",
    "https://media0.giphy.com/media/KzQERR8hMYEvGwVARQ/giphy.gif",
    "https://rankedbyvotes.com/wp-content/uploads/Community-Education.gif",
    "https://i.pinimg.com/originals/8b/36/28/8b362821e077380c3e45f006f48bf741.gif",
    "https://media1.giphy.com/media/j5WNDiz8VRwhSWr3oW/giphy.gif"
  ];
  var i;
  if (correct == 0) {
    i = 4;
  }
  if (correct > 0 && correct < 3) {
    i = 3;
  }
  if (correct == 3) {
    i = 2;
  }
  if (correct == 4) {
    i = 1;
  }

  if (correct == 5) {
    i = 0;
  }
  document.getElementById("sub").style.visibility = "visible";
  document.getElementById("correct").innerHTML =
    "You are all done! Your score is " + correct;
  document.getElementById("message").innerHTML = message[i];
  document.getElementById("picture").src = pic[i];
  document.getElementById("replayButton").style.visibility = "visible";
}
//Methods are properties that are functions. This adds different behavior to an object.
function replay() {
  clearRadioButtons();
  clearInterval(interval);
  document.getElementById("textbox").value = "";
  document.getElementById("textbox1").value = "";
  document.getElementById("sub").style.visibility = "hidden";
  document.getElementById("replayButton").style.visibility = "hidden";
  question();
  timer();
}

function clearRadioButtons() {
  var radioButtonArray = document.getElementsByName("qn1");
  var radioButtonArray2 = document.getElementsByName("qn2");
  var radioButtonArray3 = document.getElementsByName("qn3");

  for (var i = 0; i < radioButtonArray.length; i++) {
    var radioButton = radioButtonArray[i];
    radioButton.checked = false;
  }

  for (var i = 0; i < radioButtonArray2.length; i++) {
    var radioButton = radioButtonArray2[i];
    radioButton.checked = false;
  }

  for (var i = 0; i < radioButtonArray3.length; i++) {
    var radioButton = radioButtonArray3[i];
    radioButton.checked = false;
  }
}

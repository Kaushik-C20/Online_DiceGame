function initElement() {
  var p = document.getElementsByTagName("h1")[0];
  p.onclick = Game;
}
function Game(event) {
  var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
  var dice_1 = document.querySelector(".img1");
  path_1 = "images/dice" + randomNumber1 + ".png";
  dice_1.setAttribute("src", path_1);

  var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
  var dice_2 = document.querySelector(".img2");
  path_2 = "images/dice" + randomNumber2 + ".png";
  dice_2.setAttribute("src", path_2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

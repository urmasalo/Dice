function randomDice(min, maxi) {
  var result;
  result = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return result;
}

document.getElementById("button").onclick = function play() {
  // PLAYER 1 //

  var player1Dice = randomDice(1, 6);

  if (player1Dice === 1) {
    document.getElementById("player1").src = "images/dice1.png";
  }
  if (player1Dice === 2) {
    document.getElementById("player1").src = "images/dice2.png";
  }
  if (player1Dice === 3) {
    document.getElementById("player1").src = "images/dice3.png";
  }
  if (player1Dice === 4) {
    document.getElementById("player1").src = "images/dice4.png";
  }
  if (player1Dice === 5) {
    document.getElementById("player1").src = "images/dice5.png";
  }
  if (player1Dice === 6) {
    document.getElementById("player1").src = "images/dice6.png";
  }

  // PLAYER 2 //

  var player2Dice = randomDice(1, 6);

  if (player2Dice === 1) {
    document.getElementById("player2").src = "images/dice1.png";
  }
  if (player2Dice === 2) {
    document.getElementById("player2").src = "images/dice2.png";
  }
  if (player2Dice === 3) {
    document.getElementById("player2").src = "images/dice3.png";
  }
  if (player2Dice === 4) {
    document.getElementById("player2").src = "images/dice4.png";
  }
  if (player2Dice === 5) {
    document.getElementById("player2").src = "images/dice5.png";
  }
  if (player2Dice === 6) {
    document.getElementById("player2").src = "images/dice6.png";
  }

  // Score Board //

  if (player1Dice > player2Dice) {
    document.querySelector("h1").innerHTML = "Player 1 Wins   🎉";
  }
  if (player1Dice < player2Dice) {
    document.querySelector("h1").innerHTML = "Player 2 Wins   🎉";
  }
  if (player1Dice === player2Dice) {
    document.querySelector("h1").innerHTML = "Drawn !!!";
  }
};

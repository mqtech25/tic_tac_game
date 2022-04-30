var game = [];
var playerTurn = 1;
var isGameOver = false;
var isGamePlaying = false;
var grid = document.getElementById("grid");
var gamePlay = document.querySelector(".gamePlay");
var playBtn = document.querySelector(".btn");
var winer = document.querySelector(".win");

function generateGrid() {
  game = [];
  for (var i = 0; i < 9; i++) {
    game.push({
      player: 0,
      checked: false,
      text: "",
    });
  }
}

function board() {
  grid.innerHTML = "";
  game.forEach((obj, index) => {
    var div = document.createElement("div");
    div.classList.add("game-btn");
    div.style.width = grid.getBoundingClientRect().width / 3 - 2 + "px";
    div.style.height = grid.getBoundingClientRect().height / 3 - 2 + "px";
    div.dataset.index = index;
    div.innerHTML = obj.text;
    div.addEventListener("click", turn);
    grid.appendChild(div);
  });
}
function turn(e) {
  var index = e.target.dataset.index;
  if (game[index].checked) return;
  game[index].player = playerTurn;
  game[index].checked = true;
  game[index].text = playerTurn == 1 ? "X" : "O";
  playerTurn == 1 ? (playerTurn = 2) : (playerTurn = 1);
  wins();
  board();
}

function wins() {
  if (
    (game[0].text == "X" && game[1].text == "X" && game[2].text == "X") ||
    (game[3].text == "X" && game[4].text == "X" && game[5].text == "X") ||
    (game[6].text == "X" && game[7].text == "X" && game[8].text == "X") ||
    (game[0].text == "X" && game[3].text == "X" && game[6].text == "X") ||
    (game[1].text == "X" && game[4].text == "X" && game[7].text == "X") ||
    (game[2].text == "X" && game[5].text == "X" && game[8].text == "X") ||
    (game[0].text == "X" && game[4].text == "X" && game[8].text == "X") ||
    (game[2].text == "X" && game[4].text == "X" && game[6].text == "X")
  ) {
    gamePlay.style.display = "block";
    playBtn.innerHTML = "Play Again";
    winer.innerHTML = "X </br> WINNER!";
    winer.style.display = "block";
    generateGrid();
  } else if (
    (game[0].text == "O" && game[1].text == "O" && game[2].text == "O") ||
    (game[3].text == "O" && game[4].text == "O" && game[5].text == "O") ||
    (game[6].text == "O" && game[7].text == "O" && game[8].text == "O") ||
    (game[0].text == "O" && game[3].text == "O" && game[6].text == "O") ||
    (game[1].text == "O" && game[4].text == "O" && game[7].text == "O") ||
    (game[2].text == "O" && game[5].text == "O" && game[8].text == "O") ||
    (game[0].text == "O" && game[4].text == "O" && game[8].text == "O") ||
    (game[2].text == "O" && game[4].text == "O" && game[6].text == "O")
  ) {
    gamePlay.style.display = "block";
    playBtn.innerHTML = "Play Again";
    winer.innerHTML = "O </br> WINNER!";
    winer.style.display = "block";
    generateGrid();
  } else {
    var draw = true;
    game.forEach((obj) => {
      if (!obj.checked) {
        draw = false;
      }
    });
    if (draw && !isGameOver) {
      playBtn.innerHTML = "Play Again";
      gamePlay.style.display = "block";
      winer.innerHTML = "DRAW!";
      winer.style.display = "block";
      generateGrid();
    }
  }
}
function isPlay() {
  gamePlay.style.display = "none";
  generateGrid();
  board();
  isGamePlaying = true;
}

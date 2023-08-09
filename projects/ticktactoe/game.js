alert("Rules: 1. one is blue, the other plays as pink | 2. the one who loses starts the next round for fairness");

const tiles = document.getElementsByClassName("tile");
console.log(tiles);

let clickCounter = 0;
let scoreBlue = 0;
let scorePink = 0;

updateScore();

for (let tile of tiles) {
  tile.addEventListener("click", () => {
    if (clickCounter % 2 === 0) {
      tile.style.backgroundColor = "#232367";
    }
    if (clickCounter % 2 === 1) {
      tile.style.backgroundColor = "#751578";
    }
    clickCounter++;
    checkForWin();
  });
}

function checkForWin() {
  const bgColorTile1 = getComputedStyle(
    document.getElementById("tile1")
  ).getPropertyValue("background-color");
  const bgColorTile2 = getComputedStyle(
    document.getElementById("tile2")
  ).getPropertyValue("background-color");
  const bgColorTile3 = getComputedStyle(
    document.getElementById("tile3")
  ).getPropertyValue("background-color");
  const bgColorTile4 = getComputedStyle(
    document.getElementById("tile4")
  ).getPropertyValue("background-color");
  const bgColorTile5 = getComputedStyle(
    document.getElementById("tile5")
  ).getPropertyValue("background-color");
  const bgColorTile6 = getComputedStyle(
    document.getElementById("tile6")
  ).getPropertyValue("background-color");
  const bgColorTile7 = getComputedStyle(
    document.getElementById("tile7")
  ).getPropertyValue("background-color");
  const bgColorTile8 = getComputedStyle(
    document.getElementById("tile8")
  ).getPropertyValue("background-color");
  const bgColorTile9 = getComputedStyle(
    document.getElementById("tile9")
  ).getPropertyValue("background-color");

  console.log(bgColorTile1, bgColorTile2, bgColorTile3);

  //first horizontal

  if (
    bgColorTile1 === bgColorTile2 &&
    bgColorTile1 === bgColorTile3 &&
    bgColorTile1 === "rgb(35, 35, 103)"
  ) {
    alert("Blue Wins");
    scoreBlue++;
    updateScore();
  }
  if (
    bgColorTile1 === bgColorTile2 &&
    bgColorTile1 === bgColorTile3 &&
    bgColorTile1 === "rgb(117, 21, 120)"
  ) {
    alert("Pink Wins");
    scorePink++;
    updateScore();
  }

  //second horizontal

  if (
    bgColorTile4 === bgColorTile5 &&
    bgColorTile4 === bgColorTile6 &&
    bgColorTile4 === "rgb(35, 35, 103)"
  ) {
    alert("Blue Wins");
    scoreBlue++;
    updateScore();
  }
  if (
    bgColorTile4 === bgColorTile5 &&
    bgColorTile4 === bgColorTile6 &&
    bgColorTile4 === "rgb(117, 21, 120)"
  ) {
    alert("Pink Wins");
    scorePink++;
    updateScore();
  }

  //third horizontal

  if (
    bgColorTile7 === bgColorTile8 &&
    bgColorTile7 === bgColorTile9 &&
    bgColorTile7 === "rgb(35, 35, 103)"
  ) {
    alert("Blue Wins");
    scoreBlue++;
    updateScore();
  }
  if (
    bgColorTile7 === bgColorTile8 &&
    bgColorTile7 === bgColorTile9 &&
    bgColorTile7 === "rgb(117, 21, 120)"
  ) {
    alert("Pink Wins");
    scorePink++;
    updateScore();
  }

  //first vertical
  if (
    bgColorTile1 === bgColorTile4 &&
    bgColorTile1 === bgColorTile7 &&
    bgColorTile1 === "rgb(35, 35, 103)"
  ) {
    alert("Blue Wins");
    scoreBlue++;
    updateScore();
  }
  if (
    bgColorTile1 === bgColorTile4 &&
    bgColorTile1 === bgColorTile7 &&
    bgColorTile1 === "rgb(117, 21, 120)"
  ) {
    alert("Pink Wins");
    scorePink++;
    updateScore();
  }
  //second vertical

  if (
    bgColorTile2 === bgColorTile5 &&
    bgColorTile2 === bgColorTile8 &&
    bgColorTile2 === "rgb(35, 35, 103)"
  ) {
    alert("Blue Wins");
    scoreBlue++;
    updateScore();
  }
  if (
    bgColorTile2 === bgColorTile5 &&
    bgColorTile2 === bgColorTile8 &&
    bgColorTile2 === "rgb(117, 21, 120)"
  ) {
    alert("Pink Wins");
    scorePink++;
    updateScore();
  }

  //third vertical

  if (
    bgColorTile3 === bgColorTile6 &&
    bgColorTile3 === bgColorTile9 &&
    bgColorTile3 === "rgb(35, 35, 103)"
  ) {
    alert("Blue Wins");
    scoreBlue++;
    updateScore();
  }
  if (
    bgColorTile3 === bgColorTile6 &&
    bgColorTile3 === bgColorTile9 &&
    bgColorTile3 === "rgb(117, 21, 120)"
  ) {
    alert("Pink Wins");
    scorePink++;
    updateScore();
  }
  //top left to bottom right

  if (
    bgColorTile1 === bgColorTile5 &&
    bgColorTile1 === bgColorTile9 &&
    bgColorTile1 === "rgb(35, 35, 103)"
  ) {
    alert("Blue Wins");
    scoreBlue++;
    updateScore();
  }
  if (
    bgColorTile1 === bgColorTile5 &&
    bgColorTile1 === bgColorTile9 &&
    bgColorTile1 === "rgb(117, 21, 120)"
  ) {
    alert("Pink Wins");
    scorePink++;
    updateScore();
  }
  //top right to bottom left
  if (
    bgColorTile3 === bgColorTile5 &&
    bgColorTile3 === bgColorTile7 &&
    bgColorTile3 === "rgb(35, 35, 103)"
  ) {
    alert("Blue Wins");
    scoreBlue++;
    updateScore();
  }
  if (
    bgColorTile3 === bgColorTile5 &&
    bgColorTile3 === bgColorTile7 &&
    bgColorTile3 === "rgb(117, 21, 120)"
  ) {
    alert("Pink Wins");
    scorePink++;
    updateScore();
  }
}
document.getElementById("reset").addEventListener("click", () => {
  for (let tile of tiles) {
    tile.style.backgroundColor = "rgb(230, 230, 230)";
  }
});
function updateScore() {
  document.getElementById("scores").innerText =
    "Blue: " + scoreBlue + " | " + "Pink: " + scorePink;
}

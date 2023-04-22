var dice1 = Math.random();
dice1 = dice1 * 6;
dice1 = Math.floor(dice1) + 1;

var dice2 = Math.random();
dice2 = dice2 * 6;
dice2 = Math.floor(dice2) + 1;

console.log(dice1);
console.log(dice2);

if (dice1 == 1) {
  document.querySelector(".img1").setAttribute("src", "./dice1.png");
} else if (dice1 == 2) {
  document.querySelector(".img1").setAttribute("src", "./dice2.png");
} else if (dice1 == 3) {
  document.querySelector(".img1").setAttribute("src", "./dice3.png");
} else if (dice1 == 4) {
  document.querySelector(".img1").setAttribute("src", "./dice4.png");
} else if (dice1 == 5) {
  document.querySelector(".img1").setAttribute("src", "./dice5.png");
} else {
  document.querySelector(".img1").setAttribute("src", "./dice6.png");
}

if (dice2 == 1) {
  document.querySelector(".img2").setAttribute("src", "./dice1.png");
} else if (dice2 == 2) {
  document.querySelector(".img2").setAttribute("src", "./dice2.png");
} else if (dice2 == 3) {
  document.querySelector(".img2").setAttribute("src", "./dice3.png");
} else if (dice2 == 4) {
  document.querySelector(".img2").setAttribute("src", "./dice4.png");
} else if (dice2 == 5) {
  document.querySelector(".img2").setAttribute("src", "./dice5.png");
} else {
  document.querySelector(".img2").setAttribute("src", "./dice6.png");
}

if (dice1 > dice2) {
  document.querySelector("h1").textContent = "Player 1 is winner!";
} else if (dice1 < dice2) {
  document.querySelector("h1").textContent = "Player 2 is winner!";
} else {
  document.querySelector("h1").textContent =
    "There's a draw! Refresh me again!";
}

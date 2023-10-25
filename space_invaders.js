const backgroundMusic = new Audio("background.wav");

function startGame() {
  backgroundMusic.play();
  // Other game initialization code here
}

// Add a button to your HTML and attach the click event to start the game
document.getElementById("startButton").addEventListener("click", startGame);
function resetGameStatus() {
  activePlayerId = 0;
  currentRound = 1;
  gameIsOver = false;

  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = 'none';

  let gameBoardIndex = 0;
  for (let i = 0; i < gameData.length; i++) {
    for (let j = 0; j < gameData.length; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = '';
      gameBoardItemElement.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
}


function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    startNewGameErrorElement.textContent = 'Please enter 2 player names';
    return;
  }
  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayerId].name;

  startNewGameErrorElement.textContent = '';
  activeGameElement.style.display = 'block';
}

function switchPlayer() {
  if (activePlayerId === 0) {
    activePlayerId = 1;
  } else {
    activePlayerId = 0;
  }
  activePlayerNameElement.textContent = players[activePlayerId].name;
}

function selectGameFieldElement(event) {
  if (event.target.tagName !== 'LI' || gameIsOver) {
    return;
  }

  const selectedFieldElement = event.target;
  const selectedRow = selectedFieldElement.dataset.row - 1;
  const selectedColumn = selectedFieldElement.dataset.col - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert('Please select an empty field!');
    return;
  }

  selectedFieldElement.textContent = players[activePlayerId].symbol;
  selectedFieldElement.classList.add('disabled');

  gameData[selectedRow][selectedColumn] = activePlayerId + 1;

  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // Checking the rows for equality
  for (let i = 0; i < gameData.length; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  //   Checking the columns for equality
  for (let i = 0; i < gameData.length; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  //   Diagonal: Top left to bottom right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  //   Diagonal: Bottom left to top right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = 'block';

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}

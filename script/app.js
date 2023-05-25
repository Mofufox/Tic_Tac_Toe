const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let playerId = 0;
let activePlayerId = 0;
let currentRound = 1;
let gameIsOver = false;

const configPlayerOverlayElement = document.getElementById('config-overlay');
const formElement = document.querySelector('form');
const configErrorElement = document.getElementById('config-error');
const activeGameElement = document.getElementById('active-game');
const startNewGameErrorElement = document.getElementById(
  'start-new-game-error'
);
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');
// const winnerNameElement = document.getElementById('winner-name');

const backdropBtnElement = document.getElementById('backdrop');
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-new-game-btn');
// const gameFieldBtnElements = document.querySelectorAll('#game-board li');

const gameBoardElement = document.getElementById('game-board');

// const confirmConfigBtnElement = document.getElementById('confirm-config-btn');

editPlayer1BtnElement.addEventListener('click', openConfigPlayerOverlayElement);
editPlayer2BtnElement.addEventListener('click', openConfigPlayerOverlayElement);
cancelConfigBtnElement.addEventListener(
  'click',
  closeConfigPlayerOverlayElement
);
backdropBtnElement.addEventListener('click', closeConfigPlayerOverlayElement);
startNewGameBtnElement.addEventListener('click', startNewGame);

formElement.addEventListener('submit', savePlayerConfig);

// for (const gameFieldBtnElement of gameFieldBtnElements) {
//   gameFieldBtnElement.addEventListener('click', selectGameFieldElement);
// }

gameBoardElement.addEventListener('click', selectGameFieldElement);

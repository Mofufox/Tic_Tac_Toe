function openConfigPlayerOverlayElement(event) {
  playerId = +event.target.dataset.playerid;
  configPlayerOverlayElement.style.display = 'block';
  backdropBtnElement.style.display = 'block';
}

function closeConfigPlayerOverlayElement() {
  configPlayerOverlayElement.style.display = 'none';
  backdropBtnElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  configErrorElement.textContent = '';
  formElement.firstElementChild.children[1].value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('playername10').trim();

  if (!enteredPlayerName) {
    configErrorElement.textContent = 'Please enter a valid player name!';
    event.target.firstElementChild.classList.add('error');
    return;
  }

  const playerDataElement = document.getElementById(
    'player-' + playerId + '-data'
  );

  playerDataElement.children[1].textContent = enteredPlayerName;

  players[playerId - 1].name = enteredPlayerName;
  closeConfigPlayerOverlayElement();
}


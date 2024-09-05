const diceElement = document.getElementById('dice');

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    const imgElement = diceElement.querySelector('img');
    imgElement.src = `./kuvat/${randomNumber}.png`;
}

diceElement.addEventListener('click', rollDice);
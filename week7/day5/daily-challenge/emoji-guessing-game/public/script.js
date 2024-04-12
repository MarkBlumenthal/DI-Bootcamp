async function newGame() {
    const response = await fetch('/new-emoji');
    const data = await response.json();
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML = `<p>Guess the Emoji: ${data.emoji}</p>`;
    data.options.forEach(option => {
        gameDiv.innerHTML += `<button onclick="makeGuess('${data.emoji}', '${option}')">${option}</button>`;
    });
}

async function makeGuess(emoji, guess) {
    const response = await fetch('/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emoji, guess })
    });
    const result = await response.json();
    updateScore(result.playerScore);
    alert(result.correct ? 'Correct!' : 'Wrong!');
    newGame();
}

function updateScore(newScore) {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = newScore;
}

async function submitScore() {
    const playerName = document.getElementById('playerName').value;
    const score = parseInt(document.getElementById('score').textContent, 10);
    if (!playerName.trim()) {
        alert('Please enter your name.');
        return;
    }
    await fetch('/submit-score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: playerName, score })
    });
    alert('Score submitted!');
    resetScore(); // Reset score after submission
    displayLeaderboard();
}

async function resetScore() {
    await fetch('/reset-score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    updateScore(0); // Update score display to 0
}

async function displayLeaderboard() {
    const response = await fetch('/leaderboard');
    const data = await response.json();
    const leaderboardDiv = document.getElementById('leaderboard');
    leaderboardDiv.innerHTML = '<h2>Leaderboard</h2>';
    data.leaderboard.forEach((entry, index) => {
        leaderboardDiv.innerHTML += `<p>${index + 1}. ${entry.name} - ${entry.score}</p>`;
    });
}

// Start a new game when the page is loaded
newGame();



const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emojis as needed
];

let playerScore = 0;
let leaderboard = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/new-emoji', (req, res) => {
    const index = Math.floor(Math.random() * emojis.length);
    const correct = emojis[index];
    const options = emojis.slice().sort(() => 0.5 - Math.random()).slice(0, 3);
    if (!options.some(option => option.name === correct.name)) {
        options.pop();
        options.push(correct);
    }
    options.sort(() => 0.5 - Math.random());
    res.json({ emoji: correct.emoji, options: options.map(option => option.name) });
});

app.post('/guess', (req, res) => {
    const { emoji, guess } = req.body;
    const correct = emojis.find(e => e.emoji === emoji).name;
    if (correct === guess) {
        playerScore++;
        res.json({ correct: true, playerScore });
    } else {
        res.json({ correct: false, playerScore });
    }
});

app.post('/submit-score', (req, res) => {
    const { name, score } = req.body;
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score); // Sort descending
    leaderboard = leaderboard.slice(0, 10); // Keep top 10 scores
    res.json({ leaderboard });
});

// Endpoint to reset the player score
app.post('/reset-score', (req, res) => {
    playerScore = 0; // Reset score
    res.json({ playerScore });
});


app.get('/leaderboard', (req, res) => {
    res.json({ leaderboard });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


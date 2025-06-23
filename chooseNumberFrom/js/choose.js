// start.js

function startGame(duration) {
    localStorage.setItem('gameDuration', duration);
    window.location.href = 'game.html';
}

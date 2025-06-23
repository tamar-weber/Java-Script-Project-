document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    document.getElementById('final-score').textContent = score;

    document.getElementById('play-again-button').addEventListener('click', () => {
        window.location.href = 'game.html';
    });
});
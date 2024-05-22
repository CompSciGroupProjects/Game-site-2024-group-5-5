const BOARD_SIZE = 9;
const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = 'X';
let gameMode = 'player';
let board = new Array(BOARD_SIZE).fill('');

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameMode === 'player') {
            playPlayerTurn(index);
        } else {
            playComputerTurn(index);
        }
    });
});

document.getElementById('switch-player').addEventListener('click', () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('current-player').textContent = `Current Player: ${currentPlayer}`;
});

document.getElementById('play-against-computer').addEventListener('click', () => {
    gameMode = 'computer';
    document.getElementById('current-player').textContent = `Current Player: ${currentPlayer} (vs Computer)`;
});

function playTurn(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById(index).textContent = currentPlayer;
        checkGameStatus();
    }
}

function playPlayerTurn(index) {
    if (board[index] === '') {
        playTurn(index);
        currentPlayer = currentPlayer === 'X'? 'O' : 'X';
        document.getElementById('current-player').textContent = `Current Player: ${currentPlayer}`;
    }
}

function playComputerTurn(index) {
    if (board[index] === '') {
        playTurn(index);
        if (!isGameWon() && !isTie()) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * BOARD_SIZE);
            } while (board[randomIndex] !== '');
            board[randomIndex] = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById(randomIndex).textContent = currentPlayer === 'X' ? 'O' : 'X';
            checkGameStatus();
        }
    }
}

function checkGameStatus() {
    if (isTie()) {
        alert('It\'s a tie!');
        resetGame();
    } else if (isGameWon()) {
        alert(`Player ${board[getWinningIndex()]} wins!`);
        resetGame();
    }
}

function isGameWon() {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const condition = WIN_CONDITIONS[i];
        if (board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]] && board[condition[0]] !== '') {
            return true;
        }
    }
    return false;
}

function getWinningIndex() {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const condition = WIN_CONDITIONS[i];
        if (board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]] && board[condition[0]] !== '') {
            return condition[0];
        }
    }
    return -1;
}

function isTie() {
    return board.every(cell => cell !== '');
}

function resetGame() {
    location.reload();
}


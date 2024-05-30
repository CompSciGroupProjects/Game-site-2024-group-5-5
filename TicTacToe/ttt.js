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
            let bestMove = getBestMove();
            board[bestMove] = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById(bestMove).textContent = currentPlayer === 'X' ? 'O' : 'X';
            checkGameStatus();
            currentPlayer = 'X';
            document.getElementById('current-player').textContent = `Current Player: ${currentPlayer} (vs Computer)`;
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

function getBestMove() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (board[i] === '') {
            board[i] = currentPlayer === 'X' ? 'O' : 'X';
            if (isGameWon()) {
                board[i] = '';
                return i;
            }
            board[i] = '';
        }
    }
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (board[i] === '') {
            board[i] = currentPlayer;
            if (isGameWon()) {
                board[i] = '';
                return i;
            }
            board[i] = '';
        }
    }
    const strategicMoves = [4, 0, 2, 6, 8, 1, 3, 5, 7];
    for (let move of strategicMoves) {
        if (board[move] === '') {
            return move;
        }
    }

    for (let i = 0; i < BOARD_SIZE; i++) {
        if (board[i] === '') {
            return i;
        }
    }

    return -1;
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
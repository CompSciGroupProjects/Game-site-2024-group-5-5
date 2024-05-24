const numRows = 6;
const numCols = 7;
const maxMoves = 42;
let numMoves = 1;
let player = 1;
let winner = false;

let c4board = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
];

function col(column) {
    if (!winner) {
        for (let i = numRows - 1; i >= 0; i--) {
            if (c4board[i][column] === null) {
                c4board[i][column] = player;
                enterVal(i, column);
                break;
            }
        }
    }
}

function enterVal(row, column) {
    document.getElementById(row + ", " + column).style.backgroundColor = player === 1 ? '#272932':'#B6C2D9';
    checkWinner(row, column);
    if (numMoves === maxMoves) {
        document.getElementById("newGame").style.display = "block";
        document.getElementById("winner").innerHTML = "Tie!";
        document.getElementById("p1").style.backgroundColor = '#6F5060';
        document.getElementById("p2").style.backgroundColor = '#6F5060';
    } else if (winner) {
        document.getElementById("newGame").style.display = "block";
        document.getElementById("winner").innerHTML = "Player " + c4board[row][column] + " wins!";
        document.getElementById("p1").style.backgroundColor = '#6F5060';
        document.getElementById("p2").style.backgroundColor = '#6F5060';
    } else {
        document.getElementById("p1").style.backgroundColor = player === 1 ? '#6F5060':'#272932';
        document.getElementById("p2").style.backgroundColor = player === 2 ? '#6F5060':'#B6C2D9';
        player = player === 1 ? 2:1;
        numMoves++;
    }
}

function checkWinner(row, col) {
    winner = checkHorizontal(row, col) ||
        checkVertical(row, col) ||
        checkDiagonal(row, col);
}

function checkHorizontal(row, col) {
    let count = 1;
    //look right of target
    for (let c = col + 1; c < numCols; c++) {
        if (c4board[row][c] === player) {
            count++;
            if (count === 4) {
                return true;
            }
        } else {
            break;
        }
    }
    //look left of target
    for (let c = col - 1; c >= 0; c--) {
        if (c4board[row][c] === player) {
            count++;
            if (count === 4) {
                return true;
            }
        } else {
            break;
        }
    }
    return false;
}

function checkVertical(row, col) {
    let count = 1;
    //look down of target
    for (let r = row + 1; r < numRows; r++) {
        if (c4board[r][col] === player) {
            count++;
            if (count === 4) {
                return true;
            }
        } else {
            break;
        }
    }
    return false;
}

function checkDiagonal(row, col) {
    //check left diagonal-\
    let count = 1;
    //look down and right of target
    let c = col + 1;
    for (let r = row + 1; r < numRows; r++) {
        if ((c <= numCols -1) && (c4board[r][c] === player)) {
            count++;
            c++;
            if (count === 4) {
                return true;                }
        } else {
            break;
        }
    }
    //look up and left of target
    c = col - 1;
    for (let r = row - 1; r >= 0; r--) {
        if ((c >= 0) && (c4board[r][c] === player)) {
            count++;
            c--;
            if (count === 4) {
                return true;
            }
        } else {
            break;
        }
    }

    //check right diagonal-/
    count = 1;
    //look up and right of target
    c = col + 1;
    for (let r = row - 1; r >= 0; r--) {
        if ((c <= numCols - 1) && (c4board[r][c] === player)) {
            count++;
            c++;
            if (count === 4) {
                return true;
            }
        } else {
            break;
        }
    }
    //look down and left of target
    c = col - 1;
    for (let r = row + 1; r < numRows; r++) {
        if ((c >= 0) && (c4board[r][c] === player)) {
            count++;
            c--;
            if (count === 4) {
                return true;
            }
        } else {
            break;
        }
    }
    return false;
}

function newGame() {
    location.reload();
}

let currentPlayer = 'X';
let cells = Array.from(document.getElementsByClassName('cell'));

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerText !== '' && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
            return cells[a].innerText;
        }
    }

    if (cells.every(cell => cell.innerText !== '')) {
        return 'tie';
    }

    return null;
}

function endGame(winner) {
    if (winner === 'tie') {
        document.getElementById('result').innerText = "It's a tie!";
    } else {
        document.getElementById('result').innerText = Player ${winner} wins!;
    }
    cells.forEach(cell => cell.removeEventListener('click', playerMove));
}

function playerMove(index) {
    if (cells[index].innerText === '') {
        cells[index].innerText = currentPlayer;
        const winner = checkWinner();
        if (winner) {
            endGame(winner);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

cells.forEach(cell => cell.addEventListener('click', playerMove));
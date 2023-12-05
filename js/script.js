let currentPlayer = "X";
let confirm = document.getElementById("confirm");
let boxes = document.getElementsByClassName("cell");
let boxArray = console.log(Array.from(boxes));
let gridArray;


for (box of boxes) {
    box.addEventListener("click", player1Turn);
}

function player1Turn(e) { 
    for (box of boxes) {
        box.innerHTML = "";
    }
    e.target.innerHTML = currentPlayer;
    confirm.style.visibility = "visible";
    confirm.addEventListener("click", nextTurn);
}

function nextTurn() {
    for (box of boxes) {
        if (box.innerHTML === "X") {
            box.classList.add("player1Selection");
            box.classList.remove("cell");
} else if (box.innerHTML === "O") {
            box.classList.add("player2Selection");
            box.classList.remove("cell");
}
}
currentPlayer = currentPlayer === "X" ? "O" : "X";;
}


/* function checkMatches() {
let rows = grid.length;
let cols = grid[0].length;

for (let row=0; row < rows; row++) {
    for (let col=0; col < cols - 2; col++) {
        if (
            grid[row][col] === grid[row][col + 1] &&
            grid[row][col] === grid[row][col + 2]
        ) {
            console.log("Match in row $(row)");
        }
    }
}
} */

function transformArray() {
let numberOfRows = 3;
let numberOfColumns = 3;
let gridArray = [];
let index = 0;

for (let i=0; i < numberofRows; i++) {
    gridArray[i]= [];
    for (let j=0; j < numberOfColumns; j++) {
        gridArray[i][j] = boxArray[index];
        index++;
    }
console.log(gridArray[i]);
}
}





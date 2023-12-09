let currentPlayer = "X";
let confirm = document.getElementById("confirm");
let reset = document.getElementById("reset");
let boxes = document.getElementsByClassName("cell");
let boxesArray = Array.from(boxes);
let resultMsg = document.getElementById("result");
let selectedBoxIndex;
let status;
let gridArray = [
["", "", ""],
["", "", ""],
["", "", ""]
];

let winCombos = [
    [0,1,2], [3,4,5], [6,7,8], //row matches
    [0,3,6], [1,4,7], [2,5,8], //column matches
    [0,4,8], [2,4,6] //diagonal matches
];


for (box of boxes) {
    box.addEventListener("click", playerTurn); //click to commence playerTurn
}

function playerTurn(e) { 
    for (box of boxes) {
        box.innerHTML = "";
        e.target.innerHTML = currentPlayer;
        selectedBoxIndex = boxesArray.indexOf(e.target);
    confirm.style.visibility = "visible";
    confirm.addEventListener("click", nextTurn); //next Turn commences when current players clicks confirm
}
}

function nextTurn() {
   let rowIndex = Math.floor(selectedBoxIndex / 3);
   let colIndex = selectedBoxIndex % 3;
   gridArray[rowIndex][colIndex] = currentPlayer; //replaces the selected index of the 2D array with the symbol of the player
   for (box of boxes) {
        if (box.innerHTML === "X") {
           box.classList.add("player1Selection");
            box.classList.remove("cell");  // class is removed so that the previous box is not clickable anymore
            box.removeEventListener("click", playerTurn);
            
        } else if (box.innerHTML === "O") {
            box.classList.add("player2Selection");
            box.classList.remove("cell");
            box.removeEventListener("click", playerTurn);
        } 
    }
        currentPlayer = currentPlayer === "X" ? "O" : "X"; // the symbol of the current player based on the previous player
        checkMatches()
}



function checkMatches() {
    let winner = null;
  
 winCombos.forEach((combo) => {
    let [a,b,c] = combo
    let valueA = gridArray[Math.floor(a/3)][a%3];
    let valueB = gridArray[Math.floor(b/3)][b%3];
    let valueC = gridArray[Math.floor(c/3)][c%3];

    if (valueA && valueA === valueB && valueA === valueC) {
        winner = valueA;
    }
 });

 if (winner) {
    resultMsg.style.visibility = "visible";
    resultMsg.innerHTML = `${winner} wins!`;
    confirm.style.visibility = "hidden";
    reset.style.visibility = "visible";
 } 

reset.addEventListener("click", restart)
} 

function restart() {
    location.reload();
}


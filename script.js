let cells = document.querySelectorAll(".cell");
let restartBtn = document.querySelector("#restart-Btn");
let newGameBtn = document.querySelector("#new-Btn");
let winnerMsg = document.querySelector(".winner-msg");
let msg = document.querySelector("#msg");


let turnO = true;
const winPatters = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8],[0,4,8],[2,4,6]
];

const resetGame = () => {
    let turnO = true;
    enablecells();
    winnerMsg.classList.add("hide");
    
}
cells.forEach((cell) => {
cell.addEventListener("click", () => {
    if(turnO){
        cell.innerText = "O";
        turnO = false;
    }else{
        cell.innerText = "X";
        turnO = true;
    }
    cell.disabled = true;

    checkWinner();
 });
});


const disablecells = () => {
    for (let cell of cells) {
        cell.disabled = true;
    }
}

const enablecells = () => {
    for (let cell of cells) {
        cell.disabled = false;
        cell.innerText = "";
    }
}

const showWinner = (winner) => {
msg.innerText = `Congratulations, Winner is ${winner}`;
winnerMsg.classList.remove("hide");
disablecells();
}

const checkWinner = () => {
   for( let pattern of winPatters) {

    let position1Value = cells[pattern[0]].innerText;
    let position2Value = cells[pattern[1]].innerText;
    let position3Value = cells[pattern[2]].innerText;

    if(position1Value != "" && position2Value != "" && position3Value != ""){
        if (position1Value  === position2Value && position2Value === position3Value){
            showWinner(position1Value);
        }
    }
   }
};

newGameBtn.addEventListener("click", resetGame);
restartBtn.addEventListener("click", resetGame);

    
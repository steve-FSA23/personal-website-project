
// Tic-Tac-Toe 
const board = [["","",""],["","",""],["","",""]]

const test = document.querySelectorAll(".cell");

test.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(`Hello I am ${item.textContent}`);
    });
});

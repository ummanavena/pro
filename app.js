let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_button");
let newbutton = document.querySelector("#newbutton");
let msg_container = document.querySelector("#msg_container");
let msg = document.querySelector("#msg");
let turno = true;

const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Add event listener to each box for clicks
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.classList.add("disabled"); // Add 'disabled' class instead of 'disabled' attribute
    checkWinner();
  });
});

// Function to check the winner
function checkWinner() {
  for (let pattern of winpatterns) {
    if (
      boxes[pattern[0]].innerText !== "" &&
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[0]].innerText === boxes[pattern[2]].innerText
    ) {
      disablebuttons();
      showwinner(boxes[pattern[0]].innerText);
    }
  }
}

// Function to show the winner message
function showwinner(winner) {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msg_container.classList.remove("hide");
}

// Function to disable all boxes after the game is over
function disablebuttons() {
  boxes.forEach((box) => {
    box.classList.add("disabled");
  });
}

// Function to enable all boxes for a new game
function enablebuttons() {
  boxes.forEach((box) => {
    box.classList.remove("disabled");
    box.innerText = "";
  });
}

// Function to reset the game
function resetgame() {
  turno = true;
  enablebuttons();
  msg_container.classList.add("hide"); // Ensure this adds 'hide' class correctly
}

// Add event listeners for the reset buttons
resetbtn.addEventListener("click", resetgame);
newbutton.addEventListener("click", resetgame);

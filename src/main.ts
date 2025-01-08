// Get Result Display Elements

const resultDisplay = document.querySelector<HTMLParagraphElement>(".result");
const operationDisplay =
  document.querySelector<HTMLParagraphElement>(".operation-input");
const buttons = document.querySelectorAll<HTMLButtonElement>(".btn");

// Event Handling for each Button
buttons.forEach((btn) =>
  btn.addEventListener("click", () => handleBtnInput(btn.value))
);

let currentOperation: string = "";
let result: number = 0;

function handleBtnInput(value: string) {
  if (resultDisplay && operationDisplay) {
    if (value === "=") {
      resultDisplay.textContent = result.toString();
    } else if (value === "clear") {
      resultDisplay.textContent = "0";
      operationDisplay.textContent = "";
    } else {
      currentOperation += value;
      operationDisplay.textContent = currentOperation;
    }
  }
}

// ==== Arithmetic Operations ====
// Addition

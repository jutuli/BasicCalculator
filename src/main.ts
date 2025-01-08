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

// Split currentOperation in numbers and operators
function splitCurrentOperation(operation: string) {
  const numbers: number[] = [];
  const operators: string[] = [];
  for (let i = 0; i < operation.length; i++) {
    let character = operation[i];
    if (
      character.includes("+") ||
      character.includes("-") ||
      character.includes("/") ||
      character.includes("*") ||
      character.includes("%")
    ) {
      operators.push(character);
    } else {
      numbers.push(parseFloat(character));
    }
    return { numbers, operators };
  }
}

// Calculate Two Numbers with Priorities of * and /
function calculateTwoNumbers(numA: number, numB: number, operator: string) {
  switch (operator) {
    case "+":
      return numA + numB;
      break;
    case "-":
      return numA - numB;
      break;
    case "*":
      return numA * numB;
      break;
    case "/":
      if (numB === 0) {
        throw new Error("No division by 0.");
      }
      return numA / numB;
      break;
    case "%":
      return numA % numB;
      break;
  }
}

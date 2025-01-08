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
      const { numbers, operators } = splitCurrentOperation(currentOperation);
      result = calculateCurrentOperation(numbers, operators);
      resultDisplay.textContent = result.toString();
      operationDisplay.textContent = currentOperation.toString();
      currentOperation = result.toString();
    } else if (value === "clear") {
      resultDisplay.textContent = "0";
      operationDisplay.textContent = "";
      currentOperation = "";
      result = 0;
    } else {
      currentOperation += value;
      operationDisplay.textContent = currentOperation;
      resultDisplay.textContent = "";
    }
  }
}

// Split currentOperation in numbers and operators
function splitCurrentOperation(operation: string) {
  const numbers: number[] = [];
  const operators: string[] = [];
  let currentNumber: string = "";
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
      numbers.push(parseFloat(currentNumber));
      currentNumber = "";
    } else {
      currentNumber += character;
    }
  }
  // If after for-loop there is still a currentNumber left, push it to the numbers-array
  if (currentNumber) {
    numbers.push(parseFloat(currentNumber));
  }
  return { numbers, operators };
}

// Calculate Two Numbers
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
    default:
      return 0;
      break;
  }
}

// Calculate Operations after one another
function calculateCurrentOperation(numbers: number[], operators: string[]) {
  let result: number = 0;
  while (operators.length > 0) {
    const operator = operators.shift();
    if (operator !== undefined && numbers.length >= 2) {
      const numA = numbers.shift();
      const numB = numbers.shift();
      if (numA !== undefined && numB !== undefined) {
        result = calculateTwoNumbers(numA, numB, operator);
        numbers.unshift(result);
      }
    }
  }
  return numbers[0];
}

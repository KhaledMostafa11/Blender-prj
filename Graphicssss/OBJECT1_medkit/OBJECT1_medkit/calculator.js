const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ── Helper: ask a question and get answer ──────────────────
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

// ── Operation Functions ────────────────────────────────────
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Error: Cannot divide by zero!";
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function modulus(a, b) {
  if (b === 0) return "Error: Cannot modulus by zero!";
  return a % b;
}

// ── Main Calculator Loop ───────────────────────────────────
async function main() {
  let keepGoing = true;

  while (keepGoing) {
    console.log("==================================");
    console.log("       CALCULATOR - Choose Op     ");
    console.log("==================================");
    console.log("1. Addition       (+)");
    console.log("2. Subtraction    (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division       (/)");
    console.log("5. Power          (^)");
    console.log("6. Modulus        (%)");
    console.log("0. Exit");
    console.log("==================================");

    let choice = await ask("Enter operation number (0-6): ");

    if (choice === "0") {
      console.log("Goodbye!");
      keepGoing = false;
    } else if (["1", "2", "3", "4", "5", "6"].includes(choice)) {
      let a = parseFloat(await ask("Enter first number: "));
      let b = parseFloat(await ask("Enter second number: "));
      let result;

      if (choice === "1") result = add(a, b);
      else if (choice === "2") result = subtract(a, b);
      else if (choice === "3") result = multiply(a, b);
      else if (choice === "4") result = divide(a, b);
      else if (choice === "5") result = power(a, b);
      else if (choice === "6") result = modulus(a, b);

      console.log("Result: " + result);

      let again = await ask("Calculate again? (yes / no): ");
      if (again.toLowerCase() !== "yes") {
        console.log("Goodbye!");
        keepGoing = false;
      }
    } else {
      console.log("Invalid choice! Please enter a number from 0 to 6.");
    }
  }

  rl.close();
}

main();
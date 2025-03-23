import * as readline from "readline-sync";

// Game options
const choices = ["rock", "paper", "scissors"];

// Function to get computer's choice
function getComputerChoice(): string {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function getWinner(player: string, computer: string): string {
  if (player === computer) return "It's a tie! 🤝";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win! 🎉";
  }

  return "Computer wins! 🤖";
}

// Main game loop
function playGame() {
  console.log("🎮 Welcome to Rock, Paper, Scissors!");

  while (true) {
    // Get user input
    const playerChoice = readline
      .question("Enter your choice (rock, paper, scissors or 'exit' to quit): ")
      .toLowerCase();

    if (playerChoice === "exit") {
      console.log("👋 Thanks for playing!");
      break;
    }

    if (!choices.includes(playerChoice)) {
      console.log("❌ Invalid choice. Please choose rock, paper, or scissors.");
      continue;
    }

    // Get computer's choice
    const computerChoice = getComputerChoice();
    console.log(`🤖 Computer chose: ${computerChoice}`);

    // Determine the winner
    const result = getWinner(playerChoice, computerChoice);
    console.log(`📊 Result: ${result}\n`);
  }
}

playGame();

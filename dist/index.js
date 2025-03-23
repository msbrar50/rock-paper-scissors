"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
// Game options
const choices = ["rock", "paper", "scissors"];
// Function to get computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Function to determine the winner
function getWinner(player, computer) {
    if (player === computer)
        return "It's a tie! 🤝";
    if ((player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")) {
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing readline module from Node.js
var readline = require("readline");
// Create readline interface
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Ask the user for input
rl.question('What is your name? ', function (answer) {
    console.log("Hello, ".concat(answer, "!"));
    rl.close();
});

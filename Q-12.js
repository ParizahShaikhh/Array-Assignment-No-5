"use strict";
// Question-No-12:
// Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer:
let lastTwoFruits = ["apple", "banana", "mango", "orange"];
lastTwoFruits.splice(0, 2);
console.log(lastTwoFruits);

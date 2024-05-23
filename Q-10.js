"use strict";
// Question-No-10:
Object.defineProperty(exports, "__esModule", { value: true });
// Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
// Answer:
class FruitManager {
    fruits;
    constructor(initialFruits) {
        this.fruits = initialFruits;
    }
    insertElement(index, ...newFruits) {
        this.fruits.splice(index, 0, ...newFruits);
    }
}
let fruitManager = new FruitManager(["apple", "banana", "mango", "orange"]);
console.log("Initial array:", fruitManager.fruits);
fruitManager.insertElement(2, "pineapple", "pear");
console.log("Update Array:", fruitManager.fruits);

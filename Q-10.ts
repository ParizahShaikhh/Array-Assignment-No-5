// Question-No-10:

// Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.

// Answer:
class FruitManager {
    fruits: string[];
    constructor(initialFruits: string[]) {
       this.fruits = initialFruits; 
    }

    insertElement(index: number, ...newFruits: string[]): void {
    this.fruits.splice(index, 0, ...newFruits);
    }
}


let fruitManager = new FruitManager( ["apple", "banana", "mango", "orange"]);
console.log("Initial array:", fruitManager.fruits);

fruitManager.insertElement(2, "pineapple", "pear");

console.log("Update Array:", fruitManager.fruits);
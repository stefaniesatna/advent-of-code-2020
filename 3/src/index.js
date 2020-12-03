const fs = require("fs")
const path = require("path")

const inputPath = path.resolve(__dirname, "input-day3.txt")
const bigArr = fs.readFileSync(inputPath, "utf-8").split("\n");

let row = 0;
let column = 0;

let tree = 0;
let treeFree = 0;

// remove the last (empty) array from the end of bigArr
bigArr.pop();

// split lines into arrays / make an array of arrays
let masterArr = [];
bigArr.forEach(element => {
    masterArr.push(element.split(""));
});

// write a function that moves 3 right and 1 down, returns back the position

function movement() {
    row++;
    column += 3;
    return [row, column];
}

// write a function that counts trees on coordinates from movement()

function countNextTree(moveFunction){
    let coordinates = moveFunction();
    return masterArr[coordinates[0]][coordinates[1]] === "#" ? tree++ : treeFree++;
}

countNextTree(movement);
countNextTree(movement);
countNextTree(movement);
countNextTree(movement);
countNextTree(movement);
countNextTree(movement);
console.log(tree, treeFree);
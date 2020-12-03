const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "input-day3.txt");
const bigArr = fs.readFileSync(inputPath, "utf-8").split("\n");

let masterArr = [];
bigArr.forEach(element => {
    masterArr.push(element.split(""));
});

const arrLength = masterArr[0].length;

let row = 0;
let column = 0;

const moveDown = 1;
const moveRight = 3;

let tree = 0;
let treeFree = 0;

for (let i = 0; i < masterArr.length - 1; i++){
    row += moveDown;
    column = (column + moveRight) % arrLength;

    if (masterArr[row][column] === "#"){
        tree++;
    }
    
    else{
        treeFree++;
}

console.log("Tree: ", tree, "TreeFree: ", treeFree);
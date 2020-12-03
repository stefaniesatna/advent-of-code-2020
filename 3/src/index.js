const fs = require("fs")
const path = require("path")

const inputPath = path.resolve(__dirname, "input-day3.txt")
const bigArr = fs.readFileSync(inputPath, "utf-8").split("\n");

// remove the last (empty) array from the end of bigArr
bigArr.pop();

// split lines into arrays / make an array of arrays
let masterArr = [];
bigArr.forEach(element => {
    masterArr.push(element.split(""));
});


console.log(masterArr);
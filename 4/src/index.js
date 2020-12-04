const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "input-day4.txt");
const bigArr = fs.readFileSync(inputPath, "utf-8").split("\n\n");
let newArr = [];



// Convert chunks of string into an array of strings
for (let i = 0; i < bigArr.length; i++){
    newArr.push(bigArr[i].split(/\s+/));
}

// Convert those strings into an array of arrays with key value pairs
let almostFinalArr = [];
for (let i = 0; i < newArr.length; i++){
    let objArr = newArr[i];
    let keyValueArr = [];
    for (let j = 0; j < objArr.length; j++){
        keyValueArr.push(objArr[j].split(":"));
    }
    almostFinalArr.push(keyValueArr);
}

// Convert those arrays with key value pairs into an object 
let finalArr = [];
for (let i = 0; i < almostFinalArr.length; i++){
    const obj = Object.fromEntries(almostFinalArr[i]);
    finalArr.push(obj);
}

console.log(finalArr);
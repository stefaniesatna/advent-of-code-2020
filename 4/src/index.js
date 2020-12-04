const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "input-day4.txt");
const bigArr = fs.readFileSync(inputPath, "utf-8").split("\n\n");

// Convert chunks of string into an array of strings
let newArr = [];
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

// Convert those arrays with key value pairs into objects
let finalArr = [];
for (let i = 0; i < almostFinalArr.length; i++){
    const obj = Object.fromEntries(almostFinalArr[i]);
    finalArr.push(obj);
}

console.log(finalArr);

// End of Setup ====================================================================

const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

// function to check validity of passports 
function isValid(obj){
    let valid = true;
    for (let i = 0; i < required.length; i++){
        if (!obj.hasOwnProperty(required[i])){
            valid = false; 
        }
    }
    return valid; 
}

validCount = finalArr.filter(x => isValid(x)).length;
console.log(validCount);

const fs = require("fs")
const path = require("path")

const inputPath = path.resolve(__dirname, "input.txt")
const numberArr = fs.readFileSync(inputPath, "utf-8").split("\n").map(x => parseInt(x))

const givenSum = 2020;

function twoAddToSum(arr, sum){
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 1; j < arr.length; j++){
            if (arr[i] + arr[j] === sum){
                return [arr[i], arr[j]];
            }
        }
    }
}

function multiplyArrItems(arr){
    return arr.reduce((a,b) => a * b);
}

console.log(multiplyArrItems(twoAddToSum(numberArr,givenSum)));

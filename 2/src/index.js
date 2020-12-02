const fs = require("fs")
const path = require("path")

const inputPath = path.resolve(__dirname, "input-day2.txt")
const arr = fs.readFileSync(inputPath, "utf-8").split("\n")
const popped = arr.pop()
const newArr = arr.map(str => ({
                     password : str.match(/\w+$/)[0],
                     min : parseInt(str.match(/^\d+/)[0]),
                     max : parseInt(str.match(/\d+\s/)[0]),
                     letter: str.match(/\w:/)[0].replace(/:/, "")
                 }));
                 
                 
function validPasswordCount(arr){
    let countPassword = 0;
    for (let obj of arr){
        let count = obj.password.split("").filter(x => x === obj.letter).length;
        if (count >= obj.min && count <= obj.max){
            countPassword++;
        }
    }
    return countPassword;
}   

console.log(validPasswordCount(newArr));
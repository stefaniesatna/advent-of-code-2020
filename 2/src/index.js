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
                 
// Solution for part 1           
function validPasswordSled(arr){
    let countPassword = 0;
    for (let obj of arr){
        let count = obj.password.split("").filter(x => x === obj.letter).length;
        if (count >= obj.min && count <= obj.max){
            countPassword++;
        }
    }
    return countPassword;
}   

// console.log(validPasswordSled(newArr));

// Solution for part 2
function validPasswordToboggan(arr){
    let countPassword = 0;
    for (let obj of arr){
        if (obj.password[obj.min - 1] === obj.letter && !(obj.password[obj.max - 1] === obj.letter)){
            countPassword++;
        }
        else if (!(obj.password[obj.min - 1] === obj.letter) && obj.password[obj.max - 1] === obj.letter){
            countPassword++;
        }
    }
    return countPassword;
} 

console.log(validPasswordToboggan(newArr));
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
// let passworded = newArr[3].password;
// console.log(passworded);
console.log(newArr);

// for (let i = 0; i < newArr.length; i++){
//     if (!regPassword.test(newArr[i])){
//         console.log("here's the failed object:", newArr[i]);
//     }
//     else {
//         console.log("I ran over it!", i);
//     }
// }
// console.log(newArr.length - 1);
// console.log(newArr[-1]);
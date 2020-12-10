const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "input-day8.txt")
const arr = fs.readFileSync(inputPath, "utf-8")
    .split("\n")
    .map(x => x.split(" "))
    .map(x => [x[0], parseInt(x[1], 10)])
    .map(([instruction, value]) => ({ instruction, value, count: 0 }));

// console.log(arr);

function accumulate(array, position, accumulator){
    console.log("Array start: ", array);
    console.log("Position start: ", position);
    console.log("Accumulator start: ", accumulator);

    accumulator += array[position].value;
    console.log("Value to add: ", array[position].value);
    console.log("Accumulator: ", accumulator)

    array[position].count++
    console.log("Count: ", array[position].count)

    position++;
    console.log("Position: ", position);

    console.log("/n/n");
}

accumulate([{value: 2, count: 0}, {value: 3, count: 0}, {value: 4, count: 0}], 0, 0)

// function execute(arr, position){
//     if(arr[position].instruction === "acc"){
//         accumulator += arr[position]["value"];
//         position++;
//     }
//     else {
//         console.log("not accumulator")
//         position++;
//     }
// }

// execute(arr, 0)
// console.log(accumulator, position);
const { executionAsyncResource } = require("async_hooks");
const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "input-day8.txt")
const arr = fs.readFileSync(inputPath, "utf-8")
    .split("\n")
    .map(x => x.split(" "))
    .map(x => [x[0], parseInt(x[1], 10)])
    .map(([instruction, value]) => ({ instruction, value, count: 0 }));

let position = 0;
let accumulator = 0;

function accumulate(){
    accumulator += arr[position].value;
    arr[position].count++
    position++;
}

function doNothing(){
    arr[position].count++;
    position++;
}

function jump(){
    arr[position].count++;
    position = (position + arr[position].value) % arr.length;
}

while (position < arr.length && arr[position].count === 0){
    if (arr[position].instruction === "acc"){
        accumulate();
    }
    else if (arr[position].instruction === "jmp"){
        jump();
    }
    else if (arr[position].instruction === "nop"){
        doNothing();
    }
}

console.log(accumulator);
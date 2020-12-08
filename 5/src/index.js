const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "input-day8.txt")
const arr = fs.readFileSync(inputPath, "utf-8")
              .split("\n")
              .map(x => x.split(" "))
              .map(x => [x[0], parseInt(x[1], 10)])
              .map(([instruction, value]) => ({instruction, value, count: 0}));

console.log(arr);
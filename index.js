"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function writeToFile(outputArray) {
    // write to file output.json
    (0, fs_1.writeFileSync)("./output.json", JSON.stringify(outputArray));
}
function startBigBang(maxNumber) {
    // the output array
    var outputArray = [];
    // loop from 1 until 100, and for each number will be calculated
    for (var i = 1; i <= maxNumber; i++) {
        // if number is both divisible by 3 and 5
        if (i % 3 === 0 && i % 5 === 0)
            outputArray.push("BIG BANG");
        // if number is only divisible by 3
        else if (i % 3 === 0)
            outputArray.push("BIG");
        // if number is only divisible by 5
        else if (i % 5 === 0)
            outputArray.push("BANG");
        // if number is not divisible by both 3 and 5
        else
            outputArray.push(i);
    }
    return outputArray;
}
var bigBangArray = startBigBang(100);
// output to output.json
writeToFile(bigBangArray);

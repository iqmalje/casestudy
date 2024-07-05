import { writeFileSync } from "fs";

function writeToFile(outputArray: Array<number | string>): void {
  // write to file output.json
  writeFileSync("./output.json", JSON.stringify(outputArray));
}
function startBigBang(maxNumber: number): Array<number | string> {
  // the output array
  const outputArray: Array<number | string> = [];

  // loop from 1 until 100, and for each number will be calculated
  for (let i: number = 1; i <= maxNumber; i++) {
    // if number is both divisible by 3 and 5
    if (i % 3 === 0 && i % 5 === 0) outputArray.push("BIG BANG");
    // if number is only divisible by 3
    else if (i % 3 === 0) outputArray.push("BIG");
    // if number is only divisible by 5
    else if (i % 5 === 0) outputArray.push("BANG");
    // if number is not divisible by both 3 and 5
    else outputArray.push(i);
  }

  return outputArray;
}

var bigBangArray = startBigBang(100);

// output to output.json

writeToFile(bigBangArray);

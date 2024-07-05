# Big Bang Case Study

The Big Bang Case Study states that for every numbers that can be divisible by 3, it should be replaced with "BIG", meanwhile numbers that can be divisible by 5 should be replaced with "BANG". If a number is divisible by both 3 and 5, should be replaced with "BIG BANG".

## What is the requirements?

Since this project uses Node.js, it is important that your device has Node.js installed. [Click here for the guide to install Node.js](https://nodejs.org/en/download/package-manager)

This project utilizes the TypeScript programming language, to ensure your device is capable of transpiling TypeScript files, you should install the `typescript` module from NPM. Simply run the command below to install the module.
\
`npm install --save-dev typescript`

To ensure your device has installed the `typescript` module correctly, type in the terminal : `tsc -v`. The TypeScript module version should be displayed if installed correctly.

## How to run the code?

To run the code instantly, in the project directory, you can type in the terminal:
\
`npm start`

The output of the __index.ts__ can be observed through __output.json__ file.
\

To transpile and run separately, there are 2 steps involved.
\

Transpile the __index.ts__ to __index.js__, type in the terminal in the project directory:
\
`tsc index.ts`

And lastly, to run the code, type in the same terminal:
\
`node index.js`
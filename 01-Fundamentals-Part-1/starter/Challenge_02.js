// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

let mass1 = 95
let height1 = 1.88

let mass2 = 85
let height2 = 1.76

let bmi1 = mass1 / (height1 ** 2)
let bmi2 = mass2 / (height2 ** 2)

var markHigherBMI = bmi1 > bmi2

if (markHigherBMI) {
    console.log(`"Mark's BMI (${bmi1.toFixed(1)}) is higher than John's (${bmi2.toFixed(1)})!"`);
} else {
    console.log(`"John's BMI (${bmi2.toFixed(1)}) is higher than Mark's (${bmi1.toFixed(1)})!"`);
}

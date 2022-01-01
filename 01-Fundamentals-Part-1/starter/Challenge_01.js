// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let mass1 = 95
let height1 = 1.88

let mass2 = 85
let height2 = 1.76

let bmi1 = mass1 / (height1 ** 2)
let bmi2 = mass2 / (height2 ** 2)

var markHigherBMI = bmi1 > bmi2

console.log(`Body Mass Index of Marks: ${bmi1.toFixed(2)}
Body Mass Index of John: ${bmi2.toFixed(2)}
BMI of Marks > BMI of John => ${markHigherBMI}`);

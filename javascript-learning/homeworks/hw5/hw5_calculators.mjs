import { Calculator } from "./hw5_calculator_class.mjs";

const calculator = new Calculator();

console.log(`Sum of 14 and 41 = ${calculator.sum(14, 41)}`);
console.log(`Subtraction 174 from 32 = ${calculator.subtraction(174, 32)}`);
console.log(
  `Multiplication of 47 and 50 = ${calculator.multiplication(47, 50)}`
);
console.log(`Division 125 and 7 = ${calculator.division(125, 7)}`);

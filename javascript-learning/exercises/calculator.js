function add(number1, number2) {
  const result = number1 + number2;
  console.log(
    `Add operation with numbers: ${number1} + ${number2} = ${result}`
  );
}

function substract(number1, number2) {
  const result = number1 - number2;
  console.log(
    `Substract operation with numbers: ${number1} - ${number2} = ${result}`
  );
}

function multiply(number1, number2) {
  const result = number1 * number2;
  console.log(
    `Multiply operation with numbers: ${number1} * ${number2} = ${result}`
  );
}

function divide(number1, number2) {
  const result = number1 / number2;
  console.log(
    `Divide operation with numbers: ${number1} / ${number2} = ${result}`
  );
}

add(15, 48);
substract(98, 41);
multiply(54, 30);
divide(88, 6);

const power = (number1) => {
  const result = Math.pow(number1, 2);
  console.log(result);
};

const divideModulo = (number1) => {
  const result = number1 % 0;
  console.log(result);
};

power(5);
divideModulo(5);

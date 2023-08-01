const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator(num, num2, op) {
    const operations = {
        "+": num+num2,
        "-": num - num2,
        "*": num * num2,
        "/": num/num2
    }
    console.log(operations[op])
}

rl.question('Write your first number: ', (number1) => {
    rl.question('Write your operator (+, -, *, /): ', (op) => {
      rl.question('Write your second number: ', (number2) => {
        calculator(parseFloat(number1), parseFloat(number2), op)
        rl.close();
      });
    });
  });

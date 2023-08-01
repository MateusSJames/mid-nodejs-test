const readline = require('readline');

function factorialRecursive(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Write a number: ', (inputWord) => {
    const factorial = factorialRecursive(inputWord);
  
    console.log(`Factorial for number "${inputWord}": ${factorial}.`);
  
    rl.close();
  });
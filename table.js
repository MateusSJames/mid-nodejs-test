const readline = require('readline');

function table(number) {
    var tableNumber = []
    for(let i = 1; i <= 10; i ++) {
        tableNumber.push(number*i)
  }
  return tableNumber
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Write a number: ', (inputWord) => {
  const tableNumber = table(inputWord);

  console.log(`Table [1-10] for number "${inputWord}": ${tableNumber}.`);

  rl.close();
});

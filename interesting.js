const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateFinalValue(init, interest, months) {
    // Calculate the final value
    const finalValue = init * (1 + interest) ** months;
  
    // Display the final value
    console.log(`The final value of the investment is: ${finalValue.toFixed(2)}`);
  }

  rl.question('Enter the initial capital: ', (capital) => {
    rl.question('Enter the interest rate (as a decimal): ', (rate) => {
      rl.question('Enter the investment time (in months): ', (time) => {
        calculateFinalValue(parseFloat(capital), parseFloat(rate), parseFloat(time));
        rl.close();
      });
    });
  });
  
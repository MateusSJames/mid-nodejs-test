const readline = require('readline');

function vouwelCounter(word) {
    const vowels = ["a", "e", "i", "o", "u"]
    var count = 0
    word.split('').map((e) => {
        if (vowels.includes(e.toLowerCase())) {
            count++;
        }
    });
    return count
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Write a word: ', (inputWord) => {
    const counter = vouwelCounter(inputWord);
  
    console.log(`The quantity vouwels for word "${inputWord}": "${counter}"`);
  
    rl.close();
  });
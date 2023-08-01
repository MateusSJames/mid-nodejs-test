const readline = require('readline');

function isPalindrome(word) {
  const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
  const reversedWord = cleanWord.split('').reverse().join('');

  return cleanWord === reversedWord;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Write a word: ', (inputWord) => {
  const isPalindromo = isPalindrome(inputWord);

  console.log(`That word "${inputWord}" is palindrome? ${isPalindromo ? 'Yes' : 'No'}.`);

  rl.close();
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media.toFixed(2);
}

rl.question('Write your first note: ', (nota1) => {
  rl.question('Write your second note: ', (nota2) => {
    rl.question('Write your thrid note: ', (nota3) => {
      const media = calcularMedia(parseFloat(nota1), parseFloat(nota2), parseFloat(nota3));
      console.log("Final average: " + media);
      rl.close();
    });
  });
});

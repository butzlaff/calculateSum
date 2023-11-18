function calculateSum(number) {
  // Checa se o número é inteiro e positivo, caso não seja, retorna uma
  // mensagem informando que o número é invalido.
  if (number <= 0 || number % 1 !== 0) {
    return 'Número inválido. '
      + '\nO número deve ser maior que 0 (zero) e ser um número positivo.';
  }
  // Inicia a variável de soma com o valor 0.
  let sum = 0;
  // Percorre todos os números de 0 até o número informado.
  // Caso seja divisível por 3 ou 5, adiciona o número na variável de soma.
  for (let i = 0; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  // Retorna a
  return sum;
}

console.log(calculateSum(13));

module.exports = { calculateSum }
const INITIAL_STATE = 4;

function isFibonnacciNumber(valor = INITIAL_STATE) {
  if (valor < 0) return false; // valor menor que 0 não faz parte do fibonnaci

  // valores iniciais
  let a = 0;
  let b = 1;

  if (valor === 0 || valor === 1) return true; // valor recebido for igual a valores iniciais

  // calcula fibonnaci até b valor maior ser igual a valor recebido
  while (b < valor) {
    [a, b] = [b, a + b]; // a recebe valor de b e b atualiza seu valor para o proximo numero no fibonnaci
    if (b === valor) {
      console.log(true);
      return true;
    }
  }

  return false;
}

if (isFibonnacciNumber()) {
  console.log(`Número ${INITIAL_STATE} pertence ao fibonnaci`);
} else {
  console.log(`Número ${INITIAL_STATE} não pertence ao fibonnaci`);
}

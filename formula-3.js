const fs = require("fs");

const lerJSON = () => {
  const data = fs.readFileSync("faturamento.json");
  return JSON.parse(data).faturamentoDiario;
};

let response = lerJSON();

function calcularMenorEMaiorFaturamento(dados = response) {
  let menor = Infinity;
  let maior = -Infinity;

  dados.forEach(({ faturamento }) => {
    if (faturamento > 0) {
      if (faturamento < menor) menor = faturamento;
      if (faturamento > menor) maior = faturamento;
    }
  });

  return { menor, maior };
}

function calcularMedia(dados = response) {
  let soma = 0;
  let diasComFaturamento = 0;

  dados.forEach(({ faturamento }) => {
    if (faturamento > 0) {
      soma += faturamento;
      diasComFaturamento++;
    }
  });

  const media = soma / diasComFaturamento;

  return diasComFaturamento > 0 ? { media } : 0;
}

function contarDiasAcimaMedia(dados = response, paramsMedia = media) {
  let count = 0;

  dados.forEach(({ faturamento }) => {
    if (faturamento > paramsMedia) {
      count++;
    }
  });

  return { count };
}

const { maior, menor } = calcularMenorEMaiorFaturamento();
const { media } = calcularMedia();
const { count } = contarDiasAcimaMedia();

console.log(`Menor valor do faturamento: R$ ${menor}`);
console.log(`Maior valor do faturamento: R$ ${maior}`);

console.log(`Média mensal de faturamento: R$: ${media.toFixed(2)}`);

console.log(`Número de dias com faturamento acima da média: ${count}`);

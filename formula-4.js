const SP = 67.836;
const RJ = 36.679;
const MG = 29.23;
const ES = 27.165;
const OUTROS = 19.85;

function calcularFaturamentoMensalPorEstado() {
  const soma = SP + RJ + MG + ES + OUTROS;

  const percentualSP = (SP * 100) / soma;
  const percentualRJ = (RJ * 100) / soma;
  const percentualMG = (MG * 100) / soma;
  const percentualES = (ES * 100) / soma;
  const percentualOUTROS = (OUTROS * 100) / soma;

  console.log(`Percentual SP: ${percentualSP.toFixed(2)}`);
  console.log(`Percentual RJ: ${percentualRJ.toFixed(2)}`);
  console.log(`Percentual MG: ${percentualMG.toFixed(2)}`);
  console.log(`Percentual ES: ${percentualES.toFixed(2)}`);
  console.log(`Percentual OUTROS: ${percentualOUTROS.toFixed(2)}`);
}
calcularFaturamentoMensalPorEstado();

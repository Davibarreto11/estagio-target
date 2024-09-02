const INITIAL_STRING = "Davi Artur";
const EMPRESA = "Target";

function inverterString(string) {
  let stringInvertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  console.log(stringInvertida);
}

inverterString(INITIAL_STRING);
inverterString(EMPRESA);

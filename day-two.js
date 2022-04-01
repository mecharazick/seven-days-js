const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let doLike = 0;

while (doLike < 1 || doLike > 2) {
  doLike = prompt(
    "Você gosta de estudar " +
      linguagem +
      "?\n Responda com [1] para sim ou [2] para não."
  );
  doLike = Number(doLike);
  switch (doLike) {
    case 1:
      alert("Muito bom! Continue estudando e você terá muito sucesso.");
      break;
    case 2:
      alert("Ahh que pena... Já tentou aprender outras linguagens?");
      break;
    default:
      alert(
        "Poxa, tem que responder com [1] para sim ou [2] para não, por favor :v"
      );
  }
}

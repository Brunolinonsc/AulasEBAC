"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twiter'];

// for (let i = 0; i < redesSociais.length; i++){
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
// }

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("# ".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Bruno', 'Julia', 'Paula', 'Wager'];
var alunos2 = alunos.map(function (intemAtual) {
  return {
    nome: intemAtual,
    curso: 'FrontEnd'
  };
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; // retorna true ou false
});
console.log(paula);
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; // retorna true ou false
});
console.log(indiceDaPaula);

// every 

alunos2.push({
  nome: 'Lucio',
  curso: 'BackEnd'
});
var todosOsAlunosSaoDeFronEnd = alunos2.every(function (item) {
  return item.curso === 'FrontEnd';
});
console.log(todosOsAlunosSaoDeFronEnd);
var existeAlgunalunoDeBackEnd = alunos2.some(function (item) {
  return item.curso === 'BackEnd' && item.curso === 'FrontEnd';
});
console.log(existeAlgunalunoDeBackEnd);
function filtraAlunosDeBackEnd(aluno) {
  return aluno.curso === 'BackEnd';
}
var alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd);
console.log(alunosDeBackEnd);
var nuns = [10, 20, 30, 40];
var soma = nuns.reduce(function (acumulador, intemAtual) {
  acumulador += intemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComfor = 0;
for (var i = 0; i < nuns.length; i++) {
  somaComfor += nuns[i];
}
console.log(somaComfor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, intemAtual) {
  acumulador += "".concat(intemAtual.nome);
  return acumulador;
}, '');
console.log(nomesDosAlunos);

// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function(numeroAtual){
//     numeroAtual = numeroAtual * 2;
//     return numeroAtual;
// })
// console.log(dobroDosNumeros)
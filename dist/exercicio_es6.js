//Criando o array de objetos com o nome e a nota dos alunos.

const alunos = [{
  nome: "Bruno",
  nota: 7.8
}, {
  nome: "João",
  nota: 6.2
}, {
  nome: "Carlos",
  nota: 5.8
}, {
  nome: "Genevaldo",
  nota: 9.5
}, {
  nome: "Gabriela",
  nota: 4.8
}, {
  nome: "Tiagoo",
  nota: 7.5
}, {
  nome: "Everaldo",
  nota: 5.9
}];

//Função paa retornar os alunos com a nota mauor ou igual a 6.0

function filtarAlunosAprovados(alunos) {
  return alunos.filter(aluno => aluno.nota >= 6);
}

// Utilizando a função para onbter os alunos aprovados

const alunosAprovados = filtarAlunosAprovados(alunos);
console.log(alunosAprovados);
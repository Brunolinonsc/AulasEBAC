"use strict";
const alunos = [
    {
        nome: "Bruno",
        cursos: ["Front End", "Uxui"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Back End", "Python"],
        idade: 29
    }
];
alunos.push({
    nome: "Julia",
    cursos: ["python", "JAva"],
    idade: 30
});
const novoAluno = {
    nome: "Bruno",
    //cursos: "Python",
    idade: 32
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}

type aluno = {
    nome: string;
    cursos?:string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: "Julia",
    cursos: ["python", "JAva"],
    idade :30
})

const novoAluno: aluno = {
    nome: "Bruno",
    //cursos: "Python",
    idade: 32
}

function exibeAluno(aluno: aluno){
    console.log(aluno.nome)
}
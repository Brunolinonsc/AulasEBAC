const redesSociais = ['Facebook', 'Instagram' , 'Twiter'];

// for (let i = 0; i < redesSociais.length; i++){
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
// }

redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`# ${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Bruno', 'Julia', 'Paula', 'Wager'];

const alunos2 = alunos.map(function(intemAtual){
    return {
        nome: intemAtual,
        curso:  'FrontEnd'
    }
})

console.log(alunos2);

const paula = alunos2.find(function(item){
    return item.nome == 'Paula' // retorna true ou false
})
console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula' // retorna true ou false
})
console.log(indiceDaPaula)

// every 

alunos2.push({
    nome: 'Lucio',
    curso: 'BackEnd'
})

const todosOsAlunosSaoDeFronEnd = alunos2.every(function(item){
    return item.curso === 'FrontEnd'
})


console.log(todosOsAlunosSaoDeFronEnd)

const existeAlgunalunoDeBackEnd = alunos2.some(function(item){
    return item.curso === 'BackEnd' && item.curso === 'FrontEnd'
})
console.log(existeAlgunalunoDeBackEnd)

function filtraAlunosDeBackEnd(aluno){
    return aluno.curso === 'BackEnd'
}


const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd)
console.log(alunosDeBackEnd)

const nuns = [10, 20, 30, 40]


const soma = nuns.reduce(function(acumulador, intemAtual){
    acumulador += intemAtual
    return acumulador;
}, 0)
console.log(soma)


let somaComfor = 0;
for(let i = 0; i < nuns.length; i ++){
    somaComfor += nuns[i];
}
console.log(somaComfor)

const nomesDosAlunos = alunos2.reduce(function(acumulador, intemAtual){
    acumulador += `${intemAtual.nome}`
    return acumulador
}, '')
console.log(nomesDosAlunos)

// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function(numeroAtual){
//     numeroAtual = numeroAtual * 2;
//     return numeroAtual;
// })
// console.log(dobroDosNumeros)
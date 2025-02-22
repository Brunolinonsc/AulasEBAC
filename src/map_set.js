// MAP 

let meuMap = new Map();
meuMap.set('nome', 'Bruno');
meuMap.set('stack', 'html, css, js');


console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);

console.log(meuMap.size);

console.log( meuMap.has('sobrenome'));

// meuMap.clear();

console.log(meuMap.size)

for (let chave of meuMap.keys()){
    console.log(chave);
}

for (let valor of meuMap.values()){
    console.log(valor);
}
for (let entrada of meuMap.entries()){
    console.log(entrada);
}
for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack')

console.log(meuMap)

// SET

const cpfs = new Set();

cpfs.add('3423759048')
cpfs.add('4509435235')
cpfs.add('7549375323')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})

// Transforamdno array em Set 

const array = ['Bruno lino', 'Gabriela lino', 'Luana Lino', 'Gian souza']

const arrayComoSet = new Set([...array])
console.log(arrayComoSet)

// Transformando a estrutura em array. 
const arraySemItensDuplicados = [...arrayComoSet];
console.log(arraySemItensDuplicados)
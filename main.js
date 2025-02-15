const carroDoBruno =  {
    modelo: 'Fiesta',
    fabricante: 'ford',
    anoModelo: 2008,
    anoFabricacao: 2008,
    acelerar: function(){
        console.log('vruum');
    }
}

const carroDaMaria =  {
    modelo: 'Ka',
    fabricante: 'ford',
    anoModelo: 2008,
    anoFabricacao: 2008,
    acelerar: function(){
        console.log('vruum');
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('acelerar');
    }
}
const carroBruno2 = new Carro('Uno', 'Fiat', 2007, 2008);
const carroMaria2 = new Carro('Palio', 'Fiat', 2007, 2008);

console.log(carroBruno2);
console.log(carroMaria2);

const nome = 'Bruno'
const idade = 27
const eMaiorDeIdade = true
const conhecimentos = ['html', 'css', 'javascript']

const pessoa = {
    nome : nome,
    idade : idade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome)
console.log(pessoa[nome])

function exibeAtributo(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}
exibeAtributo('nome');

pessoa ['sobrenome'] =  null;

if (pessoa ['sobrenome']){
console.log('A pessoa tem um sobrenome')
}

if ('sobrenone' in pessoa){
    console.log('tem sobrenome')
}
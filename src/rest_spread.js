//rest
function somar(){
    let soma = 0;
// Argumentis não é um Array, se arguments fosse um array poderia ser resolvido com o reduce
    for (let i = 0; i < arguments.length; i ++){
        soma += arguments[i];
    }

    return soma;
    // arguments.map
    // console.log(arguments)
    // console.log(arguments)
}

console.log(somar(10, 20))

// Usando a função rest, na função rest adicionar 3 ... antes do argumentos neste caso o "numeros", so pode ser inserido apenas um argumento com os 3 ...,
function somarComRest(...numeros){
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

//spread operator
const numeros = [1,2,3,4]
console.log(...numeros) 

const timesDeFutebolDeSp = ['Santos', 'Palmeiras', 'Bragantino', 'São Paulo'];
const timesDeFutebolRio = ['Vasco', 'Bota-Fogo', 'Flamengo', 'Fluminense']

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolRio);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolRio];

// timesDeFutebolDeSp.concat(timesDeFutebolRio)

console.log(timesDeFutebol)

const carroDoBruno = {
    modelo : 'Uno',
    marca : 'Fiat',
    motor : 1.0
}
const carroDoSaul = {
    ...carroDoBruno,
    motor: 1.8
}
console.log(carroDoSaul);

//Desestruturação
// const motorDoCarroDoSaul = carroDoSaul.motor;
const {motor: motorDoCarroDoSaul} = carroDoSaul;
const {motor: motorDocarroDoBruno} = carroDoBruno;

console.log(motorDoCarroDoSaul)
console.log(motorDocarroDoBruno);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);


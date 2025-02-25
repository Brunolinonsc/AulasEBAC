let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 27

let altura: number = 1.76

const nacionalidade: string = 'Brsileira'

//Array 
const colegas: string[] = ['lucas', 'bruno']
//Array com o array
const tecnologias: Array<string> = ['HTML', 'CSS', 'JS']
//Array de leitura, o metodo puch é removido no array de leitura
const notas: ReadonlyArray<number> = [1, 5, 7,8]

//Tuplas, com a tupla podemos criar um array semelhante ao javascript, na tupla tambem podemos adicionar um nope para cada 1 ex: 
// nome: string
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Bruno', true, 28]

//Iunion types união de tipos, usando o simbolo | a variavel aceitara tanto o numerico como o formato String.
let idadeDoBruno: number | string = 28
idadeDoBruno = '25'

// A variavel >Any< aceita qualquer coisa devemos manerar, usar somente em utimo caso. Pode parecer otimo, mas foge da proposta do typescript, pois nao serve para documentação. Ter cuidado ao utilizalo.
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi= []
dadosDaApi = [1,2,3]

//Tipagem


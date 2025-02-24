// //Armazenando argumentos
// function Pokemon(nomeDoPokemon, tipoDoPokemon){
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }
// //constantes
// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {

    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon){
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }
    recebeuAtaque(){
        this.#hp -= 10;
    }
    exibeHP(){
        console.log(this.#hp)
    }

}

class Pikachu extends Pokemon {
    constructor (){
        super('Picachu', 'Elétrico')
    }

    atacar(){
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;
pikachuDoAsh.atacar();

pikachuDoAsh.exibeHP()


const pikachu = new Pokemon('Pikachu', 'elétrico');
pikachu.atacar('Choque do trovão.')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico';
console.log(pikachu)
console.log(pikachuDoAsh)

console.log(pikachuDoAsh instanceof Pikachu)
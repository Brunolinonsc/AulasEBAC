
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    descricao() {
        console.log(`${this.marca} ${this.modelo}`);
    }
}
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }
    
    descricao() {
        console.log(`${this.marca} ${this.modelo} com ${this.portas} portas`);
    }
}
class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }
    descricao() {
        console.log(`${this.marca} ${this.modelo} com ${this.cilindradas} cc`);
    }
}

    const carro1 = new Carro("Toyota", "Corolla", 4);
    const moto1 = new Moto("Yamaha", "MT-07", 689);
    const carro2 = new Carro("Honda", "Civic", 4);

  carro1.descricao(); // Toyota Corolla com 4 portas
  moto1.descricao();  // Yamaha MT-07 com 689 cc
  carro2.descricao(); // Honda Civic com 4 portas
